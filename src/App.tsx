import { useState, useEffect, useRef } from "react"
import type { FC } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

interface Props {
  value?: string
}

const App: FC<Props> = ({ value }) => {
  const [count, setCount] = useState(0)
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [messages, setMessages] = useState<any[]>([])
  const [apiResponse] = useState<string>("")

  const initialized = useRef(false)

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      // 创建 WebSocket 连接
      const ws = new WebSocket("ws://localhost:4000/")
      setSocket(ws)

      // 监听 WebSocket 连接打开事件
      ws.addEventListener("open", () => {
        console.log("WebSocket 连接已打开")

        // 发送第一个心跳消息
        const heartbeatMsg = JSON.stringify({
          type: "heartbeat",
          timestamp: new Date().getTime(),
        })
        ws.send(heartbeatMsg)
      })

      // 监听 WebSocket 连接关闭事件
      ws.addEventListener("close", () => {
        console.log("WebSocket 连接已关闭")
      })

      // 监听 WebSocket 消息事件
      ws.addEventListener("message", (event) => {
        const message = JSON.parse(event.data)

        if (message.type === "heartbeat") {
          // console.log('收到心跳消息：', message);
        } else {
          console.log("收到其他消息：", message)
          setMessages((prevMessages) => [...prevMessages, message])
        }
      })
      return () => {
        // 关闭 WebSocket 连接
        if (socket && socket.readyState === WebSocket.OPEN) {
          socket.close()
        }
      }
    }
  }, [])

  function incrementCount() {
    // 调用 API 接口
    fetch("/api/hello")
      .then((response) => response.text())
      .then((data) => {
        console.log("API 响应数据：", data)
      })
      .catch((error) => {
        console.error("API 调用错误：", error)
      })
    // fetch('/api/gitpush', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     name: 'John',
    //     age: 30
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(response => {
    //     response.json().then(res => {
    //       console.log(res);
    //     })
    //   })
    //   .catch(error => console.error(error));
  }
  return (
    <div>
      <h1>WebSocket 消息：</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{JSON.stringify(message)}</li>
        ))}
      </ul>
      <h1>API 响应：</h1>
      <button role="buttonMsg" onClick={incrementCount}>
        增加计数器的值
      </button>
      <p>{apiResponse}</p>

      <div className="App">
        <header className="App-header">
          <img src={reactLogo} className="App-logo" alt="logo" width="100px" />
          <img src={viteLogo} className="App-logo" alt="logo" width="100px" />
          <p>Hello 1223WangQun!!!</p>
          <p>
            {/*
            测试代码中需要获取的DOM元素用role属性标记，这里的role属性只会在测试代码中用到，
            这样子就可以避免代码因需求改动时，因DOM属性改变导致测试不通过。有利于TDD（测试驱动开发）开发的进行
          */}
            <button
              role="buttonBox"
              type="button"
              onClick={() => setCount((v) => v + 1)}
            >
              count is: {count}
            </button>
          </p>
          <p role="props">{value}</p>
        </header>
      </div>
    </div>
  )
}

export default App
