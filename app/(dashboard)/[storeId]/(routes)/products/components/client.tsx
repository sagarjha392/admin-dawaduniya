"use client"
import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react/";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";
import { ProductsColumn, columns } from "./columns";



interface ProductClientProps{
    data: ProductsColumn[];
}

export const ProductClient :React.FC<ProductClientProps>= ({
    data
}) => {

    const router = useRouter();
    const params = useParams();

    return ( <>
    <div className="flex items-center justify-between">
        <Heading
        title={`Products (${data.length})`}
        description="Manage Products for your Store"
        />
        <Button variant={"outline"} onClick={()=>router.push(`/${params.storeId}/products/new`)}>
            <Plus className="mr-2 h-5 w-5"/>
            Add New
        </Button>
    </div>
    <Separator/>

    <DataTable searchKey="name" columns={columns} data={data}/>
    <Heading title="API" description="API calls for Products"/>
    <Separator/>
    <ApiList entityName="products" entityIdName="productId"/>
    </> );
}
 