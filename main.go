package main

import (
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	r := gin.Default()

	r.Static("/", "./")

	err := r.Run(":" + port)
	if err != nil {
		panic(err)
	}
}
