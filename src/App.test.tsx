import { render, screen, fireEvent } from "@testing-library/react"
import App from "./App"

test("props is available", () => {
  const value = "123"
  render(<App value={value} />)
  expect(screen.getByRole("props")).toHaveTextContent(value)
})

test("click of button is available", () => {
  render(<App value="123" />)
  fireEvent.click(screen.getByRole("buttonBox"))
  expect(screen.getByRole("buttonBox")).toHaveTextContent(`count is: 1`)
})

test("WebSocket message handling on incrementCount click", async () => {
  // 渲染应用程序
  render(<App value="123" />)

  // 创建 WebSocket 服务器，并添加消息处理逻辑
  const server = new WebSocket("ws://localhost:4000/")
  const message = { type: "message", message: "hello" }
  const expectedMessageText = JSON.stringify(message)
  server.addEventListener("open", () => {
    // 发送第一个心跳消息
    const heartbeatMsg = JSON.stringify({
      type: "heartbeat",
      timestamp: new Date().getTime(),
    })
    server.send(heartbeatMsg)
  })
  server.addEventListener("message", (event) => {
    // 处理接收到的消息
    const receivedMessage = JSON.parse(event.data)
    if (
      receivedMessage.type === message.type &&
      receivedMessage.message === message.message
    ) {
      console.log("WebSocket message received")
    }
  })

  // 模拟 API 响应
  const mockApiResponse = "mock API response"
  global.fetch = jest.fn().mockImplementationOnce(() => {
    return Promise.resolve({
      text: () => Promise.resolve(mockApiResponse),
    })
      .then((response) => {
        // 在这里添加回调代码
        return response
      })
      .then((_res) => {
        // 等待 WebSocket 消息和 API 响应
        expect(
          screen.getByText(expectedMessageText, { exact: false })
        ).toBeInTheDocument()
        expect(screen.getByText(mockApiResponse)).toBeInTheDocument()
      })
  })

  // 模拟用户点击 incrementCount 按钮
  fireEvent.click(screen.getByRole("buttonBox"))

  // 关闭 WebSocket 服务器
  server.close()
})

test("WebSocket message data type handling", () => {
  render(<App value="123" />)
  const server = new WebSocket("ws://localhost:4000/")
  const message1 = { type: "message", message: 123 }
  const message2 = { type: "message", message: true }
  const message3 = { type: "message", message: null }
  const expectedMessage1Text = JSON.stringify(message1)
  const expectedMessage2Text = JSON.stringify(message2)
  const expectedMessage3Text = JSON.stringify(message3)
  server.addEventListener("open", () => {
    // 发送第一个心跳消息
    const heartbeatMsg = JSON.stringify({
      type: "heartbeat",
      timestamp: new Date().getTime(),
    })
    server.send(heartbeatMsg)
  })
  server.addEventListener("message", (event) => {
    // 处理接收到的消息
    const receivedMessage = JSON.parse(event.data)
    if (
      receivedMessage.type === message1.type &&
      receivedMessage.message === message1.message
    ) {
      expect(
        screen.getByText(expectedMessage1Text, { exact: false })
      ).toBeInTheDocument()
    } else if (
      receivedMessage.type === message2.type &&
      receivedMessage.message === message2.message
    ) {
      expect(
        screen.getByText(expectedMessage2Text, { exact: false })
      ).toBeInTheDocument()
    } else if (
      receivedMessage.type === message3.type &&
      receivedMessage.message === message3.message
    ) {
      expect(
        screen.getByText(expectedMessage3Text, { exact: false })
      ).toBeInTheDocument()
    }
  })
})

test("API response data type handling", async () => {
  render(<App value="123" />)
  const mockApiResponse1 = 123
  const mockApiResponse2 = "true"
  const mockApiResponse3 = "null"
  global.fetch = jest.fn().mockImplementationOnce(() => {
    return Promise.resolve({
      text: () => Promise.resolve(mockApiResponse1),
    })
      .then((response) => {
        // 在这里添加回调代码
        return response
      })
      .then((_res) => {
        expect(screen.getByText(mockApiResponse1)).toBeInTheDocument()
      })
  })
  global.fetch = jest.fn().mockImplementationOnce(() => {
    return Promise.resolve({
      text: () => Promise.resolve(mockApiResponse2),
    })
      .then((response) => {
        // 在这里添加回调代码
        return response
      })
      .then((_res) => {
        expect(screen.getByText(mockApiResponse2)).toBeInTheDocument()
      })
  })
  global.fetch = jest.fn().mockImplementationOnce(() => {
    return Promise.resolve({
      text: () => Promise.resolve(mockApiResponse3),
    })
      .then((response) => {
        // 在这里添加回调代码
        return response
      })
      .then((_res) => {
        expect(screen.getByText(mockApiResponse3)).toBeInTheDocument()
      })
  })
})

test("API error handling", async () => {
  render(<App value="123" />)
  const errorMessage = "API error"
  global.fetch = jest.fn().mockImplementationOnce(() => {
    return Promise.reject(new Error(errorMessage))
      .then((_res) => {
        // 在这里添加回调代码
      })
      .catch(() => {
        expect(screen.getByText(errorMessage)).toBeInTheDocument()
      })
  })
})

test("component state initialization after mount", () => {
  render(<App value="123" />)
  expect(screen.getByRole("props")).toHaveTextContent("123")
  expect(screen.getByRole("buttonBox")).toBeInTheDocument()
  expect(screen.getByRole("buttonBox")).toHaveTextContent("0")
})
