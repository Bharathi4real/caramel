package main

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

func Handler() http.Handler {
	r := gin.Default()
	r.Static("/", "./")
	return r
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	http.ListenAndServe(":"+port, Handler())
}
