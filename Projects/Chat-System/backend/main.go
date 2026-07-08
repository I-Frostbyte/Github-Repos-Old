package main

import (
	"fmt"
	"net/http"
)

func setupRoutes() {
	http.HandleFunc("/", func(writer http.ResponseWriter, reader *http.Request ) {
		fmt.Fprintf(writer, "Simple Server")
	})
}

func main() {
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}