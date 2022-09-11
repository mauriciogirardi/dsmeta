package com.dsvenda.dsmeta.services;

import java.text.NumberFormat;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.dsvenda.dsmeta.entities.Sale;
import com.dsvenda.dsmeta.repositories.SaleRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {

  @Value("${twilio.sid}")
  private String twilioSid;

  @Value("${twilio.key}")
  private String twilioKey;

  @Value("${twilio.phone.from}")
  private String twilioPhoneFrom;

  @Value("${twilio.phone.to}")
  private String twilioPhoneTo;

  @Autowired
  private SaleRepository saleRepository;

  public void sendSms(Long saleId) {

    Sale sale = saleRepository.findById(saleId).get();
    String date = sale.getDate().getMonthValue() + "/" + sale.getDate().getYear();

    Locale localeBR = new Locale("pt", "BR");
    NumberFormat amount = NumberFormat.getCurrencyInstance(localeBR);

    String msg = "Vendedor " + sale.getSellerName() + ", foi destaque em " + date
        + ", com um total de " + amount;

    Twilio.init(twilioSid, twilioKey);

    PhoneNumber to = new PhoneNumber(twilioPhoneTo);
    PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

    Message message = Message.creator(to, from, msg).create();

    System.out.println(message.getSid());
  }
}
