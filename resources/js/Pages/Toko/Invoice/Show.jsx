import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { Inertia } from "@inertiajs/inertia";

export default function Show({ auth,invoice }) {
    Echo.private(`invoice.paid.${auth.user.id}`).listen('InvoicePaid', ({invoice})=>{
        if (invoice.status == 'settlement') {
            Inertia.get('/toko/products/me')
        }
    });

    return (
        <div>
            <Head title={`Your order - ${invoice.order_id}`} />
            <Container>
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        {invoice.qr_code ? (
                            <img className="border shadow-sm rounded-lg" src={invoice.qr_code} alt="" />
                        ) : null}
                        {invoice.bank ? 
                            <div>
                                
                                <div className="p-2 rounded-lg text-blue-900 bg-gradient-to-r from-blue-200 via-transparent to-transparent">
                                    <div>
                                    <strong className="font-semibold uppercase">{invoice.bank.name}</strong>  Virtual Account Number
                                    </div>
                                    <div>
                                    {invoice.bank.va_number}
                                    </div>
                                    
                                </div>
                            </div>
                         : null}
                    </div>

                    <div className="prose">
                        <h3>
                            Instruction
                        </h3>
                        <p>Please follow the instruction below if you don't understand how to pay</p>
                        <ol>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ol>
                    </div>
                </div>
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page}></App>;
