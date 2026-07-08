package main

import (
	"context"
	"log"
	"net/http"

	mqtt "github.com/eclipse/paho.mqtt.golang"
)

func main() {
	setupAPI()
	
	opts := mqtt.NewClientOptions()
	opts.AddBroker("ws://localhost:9001") // Replace with your broker address
	opts.SetClientID("mqttx_b51igcdd")

	client := mqtt.NewClient(opts)

	mosquittoWebsocketServer(client)

	log.Fatal(http.ListenAndServe(":8080", nil))
}

func setupAPI() {

	ctx := context.Background()

	manager := NewManager(ctx)

	http.Handle("/", http.FileServer(http.Dir("./frontend")))
	http.HandleFunc("/ws", manager.serveWS)
	http.HandleFunc("/login", manager.loginHandler)
}
