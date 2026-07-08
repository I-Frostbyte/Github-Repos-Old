package main

import (
	"fmt"
	"time"

	mqtt "github.com/eclipse/paho.mqtt.golang"
)

type Mqtt struct {
	client mqtt.Client
}

func mosquittoWebsocketServer(client mqtt.Client) {

	if token := client.Connect(); token.Wait() && token.Error() != nil {
		panic(token.Error())
	}
	defer client.Disconnect(250)

	// Subscribe to a topic
	topic := "WebsocketsPOC"
	qos := 1
	if token := client.Subscribe(topic, byte(qos), messagePubHandler); token.Wait() && token.Error() != nil {
		fmt.Println(token.Error())
		return
	}

	// Publish messages
	// publish(client, topic)
}

var messagePubHandler mqtt.MessageHandler = func(client mqtt.Client, msg mqtt.Message) {
	fmt.Printf("Received message: %s from topic: %s\n", msg.Payload(), msg.Topic())
}

func publish(client mqtt.Client, topic string) {
	num := 10
	for i := 0; i < num; i++ {
		text := fmt.Sprintf("Message %d", i)
		token := client.Publish(topic, 0, false, text)
		token.Wait()
		time.Sleep(time.Second)
	}
}
