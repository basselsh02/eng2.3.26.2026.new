import React from "react";
import Card from "../../ui/Card/Card";
import CardHeader from "../../ui/Card/CardHeader";
import CardBody from "../../ui/Card/CardBody";

export default function TemplateHome() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Template Dashboard</h1>
      <Card>
        <CardHeader>Welcome</CardHeader>
        <CardBody>
          This starter template keeps the design system, sidebar, and layout structure.
          Add your new domain pages and API integrations from here.
        </CardBody>
      </Card>
    </div>
  );
}
