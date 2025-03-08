import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
];

export default function PostIndex() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex">
                    <Link href={route('posts.create')} className="bg-transparent hover:bg-blue-400 text-blue-400 font-semibold hover:text-white py-0.5 px-1.5 border border-blue-400 hover:border-transparent rounded">Create Post</Link>
                </div>
                <div
                    className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <div className="p-5">

                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">ID</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Slug</TableHead>
                                    <TableHead>Body</TableHead>
                                    <TableHead>Created At</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">120</TableCell>
                                    <TableCell>Laravel React</TableCell>
                                    <TableCell>laravel-react</TableCell>
                                    <TableCell>I love Laravel. I love to create Laravel applications from
                                        scratch</TableCell>
                                    <TableCell>$250.00</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
