"use client"

import Link from "next/link"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { Club } from "@/lib/data"

export default function ClubCard(props: Club) {
  return (
    <Card className={`text-lg mb-4 ${props.verified ? "" : "bg-gray-200"}`}>
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-gray-700">
        {props.description}
      </CardContent>
      <CardFooter>
        <Link href={`/club/${props.slug}`} className={buttonVariants()}>Show more</Link>
      </CardFooter>
    </Card>
  )
}