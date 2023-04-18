package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

func Handler() http.Handler {
	r := gin.Default()
	r.Static("/", "")
	return r
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	addr := ":" + port
	if port == "8080" {
		addr = "localhost" + addr
		fmt.Println("Listening on", addr)
	}

	http.ListenAndServe(addr, Handler())
}
