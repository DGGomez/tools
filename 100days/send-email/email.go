package main

import (
	"fmt"
	"log"
	"os"

	"github.com/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

func main() {
	from := mail.NewEmail("Me", "me@brentschooley.com")
	to := mail.NewEmail("Brent", "dggomez21@gmail.com")
	subject := "Sending with Twilio SendGrid is fun ... "
	plainTextContent := "and easy to do anywhere, even with Go!"
	htmlContent := "<strong>and easty to do!"
	message := mail.NewSingleEmail(from, subject, to, plainTextContent, htmlContent)
	client := sendgrid.NewSendClient(os.Getenv("SENDGRID_API_KEY"))
	response, err := client.Send(message)
	if err != nil {
		log.Println(err)
	}
	else{
		fmt.Println(response.StatusCode)
		fmt.Println(response.Body)
		fmt.Println(response.Headers)
	}

}