
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
  const receiving_email_address = 'priyanka.r.amrute@gmail.com';
  if (fs.existsSync(php_email_form = 'assets\js\validate.js')) {
    require(php_email_form);
  } else {
    throw new Error('Unable to load the "PHP Email Form" Library!');
  }
  const contact = new PHP_Email_Form();
  contact.ajax = true;
  contact.to = receiving_email_address;
  contact.from_name = req.body.name;
  contact.from_email = req.body.email;
  contact.subject = req.body.subject;
  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  /*
  contact.smtp = {
    host: 'example.com',
    username: 'example',
    password: 'pass',
    port: '587'
  };
  */
  contact.add_message(req.body.name, 'From');
  contact.add_message(req.body.email, 'Email');
  contact.add_message(req.body.message, 'Message', 10);
  console.log(contact.send());