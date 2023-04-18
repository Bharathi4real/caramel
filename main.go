package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin" // gin framework
)

// Handler function to return gin engine
func Handler() http.Handler {
	r := gin.Default()
	r.Static("/", "")
	return r
}

// server start function
func startServer(addr string, handler http.Handler) {
	log.Printf("\n\n Serever Running on %s \n\n", addr) // log to print the server address
	err := http.ListenAndServe(addr, Handler())
	if err != nil {
		log.Fatalf("Error Starting Sever on %v, Error: %v", addr, err) // log fatal to exit the program
	}
}

// main func to start server
func main() {
	port := os.Getenv("PORT") // fetch port from env variable
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
