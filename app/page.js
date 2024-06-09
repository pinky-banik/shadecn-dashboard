import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { Activity,  CreditCard, DollarSign, UserCheck, Users } from "lucide-react";
import Card, { CardContent } from "@/components/Card";
import { cardData, userSalesData } from "./Data";
import BarChart from "@/components/BarChart";
import SalesCard from "@/components/SalesCard";



export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="DashBoard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8  transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map(
          (data, i) => (
          <Card key={i}
          amount={data.amount}
              description={data.description}
              icon={data.icon}
              label={data.label}
            />
            
          ))} </section>
      
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart/>
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">You made 265 sales this month.</p>
          </section>
          {userSalesData.map((data, i) => (
            <SalesCard key={i} email={data.email} name={data.name} saleAmount={data.saleAmount} />
          ))}
        </CardContent>
      </section>
       
    </div>
  );
}
