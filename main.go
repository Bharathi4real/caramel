package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

// Handler function to return gin engine
func Handler() http.Handler {
	r := gin.Default()
	r.Static("/", "")
	return r
}

// server start function
func startServer(addr string, handler http.Handler) {
	log.Printf("\n\n Serever Running on %s \n\n", addr) 
	err := http.ListenAndServe(addr, Handler())
	if err != nil {
		log.Fatalf("Error Starting Sever on %v, Error: %v", addr, err)
	}
}

// main func to start server
func main() {
	port := os.Getenv("PORT") /
	if port == "" {
		port = "8080"
	}

	addr := ":" + port
	if port == "8080" {
		addr = "localhost" + addr
	}

	handler := Handler()
	startServer(addr, handler)
}
