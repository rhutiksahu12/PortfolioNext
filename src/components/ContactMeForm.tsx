"use client"

import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
    name:z.string().min(2,{message:" Name is Required"} ),
    email: z.string().email("This is not a valid email.").min(5, { message: " This field is required." }),
    message: z.string().optional()

})



const ContactMeForm = () => {
    // Form Initialiazer
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name:"",
            email: "",
            message: ""
        },
    })

    // Submit Handler
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <>
            <div className='flex justify-center w-full min-h-screen items-center'>
                <div>

                </div>
                <div className='w-[80%] md:w-[60%] lg:w-[40%]'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  ">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-white text-xl'>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Wick" {...field} className='bg-inherit text-white border-0 border-b-2 rounded-none outline-none placeholder:text-white placeholder:opacity-50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-white text-xl'>Contact</FormLabel>
                                        <FormControl>
                                            <Input placeholder="1234567890" {...field} className='bg-inherit text-white border-0 border-b-2 rounded-none outline-none placeholder:text-white placeholder:opacity-50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-white text-xl'>Message</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Hello I am Rhutik" {...field} className='bg-inherit text-white border-0 border-b-2 rounded-none outline-none placeholder:text-white placeholder:opacity-50 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email" {...field} className='bg-inherit border-0 border-b-2 rounded-none placeholder:text-center' />
                                        </FormControl>
                                        <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}
                            <Button type="submit" className=''>Submit</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default ContactMeForm

