

import { cn } from '@/lib/utils';
import { User2Icon } from 'lucide-react';
import React from 'react'; 
import { Activity, CreditCard, DollarSign, UserCheck, Users } from "lucide-react";




const Card = ({label,icon,amount,description}) => {
    return (
        <CardContent>
            <section className='flex justify-between gap-2'>
                {/* label */}
                <p className='text-sm'>{label}</p>
                {/* icon */}
                <icon className="h-4 w-4 text-gray-400" />
            </section>
            <section className='flex flex-col gap-1'>
                <h2 className="text2xl font-semibold">{amount}</h2>
                <p className='text-xs text-gray-500'>{description}</p>
            </section>
        </CardContent>
    );
};

export default Card;


export function CardContent(props) {
    return (
      <div
        {...props}
        className={cn(
          "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
          props.className
        )}
      />
    );
  }