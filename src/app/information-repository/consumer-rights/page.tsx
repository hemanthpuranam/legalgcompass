"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ConsumerRightsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Consumer Rights</CardTitle>
          <CardDescription>Know your rights as a consumer under Indian law.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            As a consumer in India, you are entitled to several rights under the Consumer Protection Act. These rights are designed to protect you from unfair trade practices and ensure that you receive quality goods and services. Here are some of your key consumer rights:
          </p>
          <ol className="list-decimal list-inside pl-4">
            <li>
              <b>Right to Safety</b>: You have the right to be protected against goods and services that are hazardous to your life and property.
            </li>
            <li>
              <b>Right to Be Informed</b>: You have the right to be informed about the quality, quantity, potency, purity, standard, and price of goods and services.
            </li>
            <li>
              <b>Right to Choose</b>: You have the right to access a variety of goods and services at competitive prices.
            </li>
            <li>
              <b>Right to Be Heard</b>: You have the right to be heard and to have your interests considered at appropriate forums.
            </li>
            <li>
              <b>Right to Seek Redressal</b>: You have the right to seek redressal against unfair trade practices or unscrupulous exploitation.
            </li>
            <li>
              <b>Right to Consumer Education</b>: You have the right to consumer education and awareness.
            </li>
          </ol>
          <p>
            If you feel that any of these rights have been violated, you can file a complaint with the consumer forum or commission.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsumerRightsPage;
