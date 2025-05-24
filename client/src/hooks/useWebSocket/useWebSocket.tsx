import { useEffect, useRef } from "react";

function useWebSocket(): void {
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/ws");
    socketRef.current = socket;

    // Connection opened
    socket.addEventListener("open", (event) => {
      socket.send("Hello Server!");
    });

    // Listen for messages
    socket.addEventListener("message", (event) => {
      console.log("Message from server ", event.data);
    });
  }, []);
}

export { useWebSocket };
