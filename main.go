package main

import (
	"net/http"

	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Static("/", "./")

	http.ListenAndServe(":"+os.Getenv("PORT"), r)
}
