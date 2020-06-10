import React from 'react';
import puppeteer from 'puppeteer';


describe('the login fail', () => {
  test(
    'we view the error text',
    async () => {
      let browser = await puppeteer.launch({
        headless: true,
      });
      let page = await browser.newPage();

      const mail = "lulakath"
      const pwd = "test1"

      await page.goto('http://localhost:3000');
      await page.waitForSelector('form.form');
      await page.type('input#eMail', mail)
      await page.type('input#pwd', pwd)
      await page.click('button#button')
      await page.waitForSelector('p.incorrect')

      const error = await page.$eval('p.incorrect', e => e.innerHTML);
      expect(error).toEqual('Your login or your password is incorrect !');

      browser.close();
    },
    16000
  );
});

describe('the login success', () => {
  test(
    'we are redirected on the success page',
    async () => {
      let browser = await puppeteer.launch({
        headless: true,
      });
      let page = await browser.newPage();

      const mail = "ritzenthaler.audrey@gmail.com"
      const pwd = "test1"
      
      await page.goto('http://localhost:3000');
      await page.waitForSelector('form.form');
      await page.type('input#eMail', mail)
      await page.type('input#pwd', pwd)
      await page.click('button#button')
      await page.waitForSelector('p.success')
      
      const success = await page.$eval('p.success', e => e.innerHTML);
      expect(success).toEqual('Success !');

      browser.close();
    },
    16000
  );
});