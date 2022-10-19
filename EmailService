  public async Task ContactEmail(EmailSendRequest model)
        {
            SendGridMessage contactMsg = new SendGridMessage();

            contactMsg = GenerateContactEmail(model);

            await SendEmail(contactMsg);
        }

        private SendGridMessage GenerateContactEmail(EmailSendRequest model)
        {
            SendGridMessage contactMsg = new SendGridMessage();

            contactMsg.From = new EmailAddress("INTerogasTestEmail@dispostable.com");
            contactMsg.Subject = model.Subject;
            contactMsg.PlainTextContent = model.Content;
            contactMsg.AddTo("INTerogasTestEmail@dispostable.com");
            contactMsg.HtmlContent = GetContactUsTemplate(model.Name, model.Email, model.Subject, model.Content);

            return contactMsg;
        }

        private string GetContactUsTemplate(string name, string email, string subject, string content)
        {
            string filePath = _webHostEnvironment.WebRootPath + "/EmailTemplates/ContactUsTemplate.html";

            string htmlContent = System.IO.File.ReadAllText(filePath);

            htmlContent = htmlContent.Replace("{{Name}}", name).Replace("{{From}}", email).Replace("{{Subject}}", subject).Replace("{{Content}}", content);

            return htmlContent;

        } 

        public async Task SendContactConfirmationEmail(EmailSendRequest newUser)
        {

            SendGridMessage message = new SendGridMessage();

            message = GenerateContactConfirmationEmail(newUser);

            await SendEmail(message);
        }

        private SendGridMessage GenerateContactConfirmationEmail(EmailSendRequest model)
        {
            SendGridMessage msg = new SendGridMessage();
            EmailContent emailContent = new EmailContent();

            msg.From = new EmailAddress(model.Email);
            msg.Subject = "Thank you for contacting us!";

            emailContent = ConfirmationContactEmailContent(model.Name);

            msg.HtmlContent = GenerateContactEmailLink(emailContent);
            msg.AddTo(model.Email);

            return msg;
        }

        private EmailContent ConfirmationContactEmailContent(string Name)
        {
            EmailContent aContent = new EmailContent();
            aContent.Header = $"Hello {Name}, thank you for contacting Interrogas";
            aContent.Body = $"We will get back to you as soon as possible!";
            aContent.UrlPath = "account/confirmEmail/";

            return aContent;
        }

        private string GenerateContactEmailLink(EmailContent content)
        {
            string filePath = _webHostEnvironment.WebRootPath + "/EmailTemplates/EmailTemplate.html";
            string htmlContent = System.IO.File.ReadAllText(filePath);
            string domain = configuration.GetValue<string>("SecurityConfig:AppDomain");

            htmlContent = htmlContent.Replace("{{MessageHeader}}", content.Header)
                                    .Replace("{{MessageBody}}", content.Body)
                                    .Replace("{{Domain}}", domain)
                                    .Replace("{{Path}}", content.UrlPath);

            return htmlContent;
        }


        public async Task SendConfirmationEmail(UserAddRequest newUser, string token)
        {

            SendGridMessage message = new SendGridMessage();

            message = GenerateConfirmationEmail(newUser, token);

            await SendEmail(message);
        }
