"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FundamentalRightsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Fundamental Rights</CardTitle>
          <CardDescription>Learn about the fundamental rights guaranteed by the Indian Constitution.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            The Constitution of India guarantees six fundamental rights to its citizens:
          </p>
          <ol className="list-decimal list-inside pl-4">
            <li>
              <b>Right to Equality</b>: Ensures equality before the law and prohibits discrimination on grounds of religion, race, caste, sex, or place of birth. (Articles 14-18)
            </li>
            <li>
              <b>Right to Freedom</b>: Includes freedom of speech and expression, assembly, association, movement, and the right to practice any profession or occupation. (Articles 19-22)
            </li>
            <li>
              <b>Right against Exploitation</b>: Prohibits forced labor, human trafficking, and employment of children below 14 years in hazardous jobs. (Articles 23-24)
            </li>
            <li>
              <b>Right to Freedom of Religion</b>: Guarantees religious freedom to all citizens, allowing them to profess, practice, and propagate their religion. (Articles 25-28)
            </li>
            <li>
              <b>Cultural and Educational Rights</b>: Protects the rights of minorities to conserve their culture, language, and script, and to establish and administer educational institutions of their choice. (Articles 29-30)
            </li>
            <li>
              <b>Right to Constitutional Remedies</b>: Ensures the right to approach the Supreme Court for enforcement of fundamental rights. (Article 32)
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default FundamentalRightsPage;
