"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X, Send } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function HelpChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your Weather Dashboard assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue.toLowerCase())
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)

    setInputValue("")
  }

  const getBotResponse = (input: string): string => {
    if (input.includes("search") || input.includes("find")) {
      return "To search for a city's weather, use the search bar at the top of the dashboard. Type the city name and press Enter or click the search button."
    } else if (input.includes("location") || input.includes("gps")) {
      return "Click the location icon next to the search bar to automatically detect your current location and display weather data."
    } else if (input.includes("forecast")) {
      return "Visit the Forecast page from the navigation menu to see detailed 5-day weather forecasts and hourly predictions."
    } else if (input.includes("save") || input.includes("favorite")) {
      return "Searched locations are automatically saved! Visit the 'Saved Locations' page to view and manage your frequently searched cities."
    } else if (input.includes("dark") || input.includes("theme") || input.includes("light")) {
      return "Toggle between light and dark mode using the theme switcher button in the top-right corner of the navigation bar."
    } else if (input.includes("api") || input.includes("data")) {
      return "Weather data is provided by OpenWeatherMap API, updated in real-time. All temperature, humidity, wind speed, and forecast information is accurate and current."
    } else {
      return "I can help you with searching cities, using location services, viewing forecasts, managing saved locations, and changing themes. What would you like to know more about?"
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="fixed bottom-8 left-8 z-50 h-14 w-14 rounded-full shadow-lg chatbot-glow hover:scale-110 transition-all duration-300 bg-accent hover:bg-accent/90"
          aria-label="Open help chat"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-8 left-8 z-50 w-80 sm:w-96 h-[500px] shadow-2xl flex flex-col border-2 border-accent/20 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-accent/10">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-accent" />
              <h3 className="font-semibold">Weather Assistant</h3>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              size="icon"
              variant="ghost"
              className="h-8 w-8 hover:bg-accent/20"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t bg-background/50">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-accent hover:bg-accent/90"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}
