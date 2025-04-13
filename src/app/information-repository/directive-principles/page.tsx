"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DirectivePrinciplesPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Directive Principles</CardTitle>
          <CardDescription>Understand the directive principles of state policy in India.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            The Directive Principles of State Policy (DPSPs) are guidelines to the central and state governments of India, to be kept in mind while framing laws and policies. These provisions, contained in Part IV of the Constitution of India, are not enforceable by any court, but the principles laid down therein are considered fundamental in the governance of the country, making it the duty of the State to apply these principles in making laws.
          </p>
          <ol className="list-decimal list-inside pl-4">
            <li>
              <b>Article 38</b>: State to secure a social order for the promotion of welfare of the people.
            </li>
            <li>
              <b>Article 39</b>: Certain principles of policy to be followed by the State.
            </li>
            <li>
              <b>Article 39A</b>: Equal justice and free legal aid.
            </li>
            <li>
              <b>Article 41</b>: Right to work, to education and to public assistance in certain cases.
            </li>
            <li>
              <b>Article 43</b>: Living wage, etc., for workers.
            </li>
            <li>
              <b>Article 43A</b>: Participation of workers in management of industries.
            </li>
            <li>
              <b>Article 47</b>: Duty of the State to raise the level of nutrition and the standard of living and to improve public health.
            </li>
            <li>
              <b>Article 48</b>: Organisation of agriculture and animal husbandry.
            </li>
            <li>
              <b>Article 48A</b>: Protection and improvement of environment and safeguarding of forests and wild life.
            </li>
            <li>
              <b>Article 49</b>: Protection of monuments and places and objects of national importance.
            </li>
            <li>
              <b>Article 50</b>: Separation of judiciary from executive.
            </li>
            <li>
              <b>Article 51</b>: Promotion of international peace and security.
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default DirectivePrinciplesPage;
