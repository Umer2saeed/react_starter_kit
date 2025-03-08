import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

type PostForm = {
    title: string;
    content: string;
    image: File | null;
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts / Create',
        href: '/posts/create',
    },
];

export default function PostCreate() {

    const { data, setData, post, processing, errors, reset } = useForm<Required<PostForm>>({
        title: '',
        content: '',
        image: null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('posts.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Post Create" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div
                    className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <div className="p-5">

                        <form className="flex flex-col gap-6" onSubmit={submit}>

                            <div className="flex flex-wrap">

                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name">
                                        Title
                                    </label>
                                    <Input
                                        id="title"
                                        type="title"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="title"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        placeholder="Enter Title"
                                    />
                                    <InputError message={errors.title} />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-last-name">
                                        Slug
                                    </label>
                                    <Input
                                        id="title"
                                        type="title"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="title"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        placeholder="Enter Title"
                                    />
                                    <InputError message={errors.title} />
                                </div>

                                <div className="w-full mt-5 px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-last-name">
                                        Content
                                    </label>
                                    <Input
                                        id="title"
                                        type="title"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="title"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        placeholder="Enter Title"
                                    />
                                    <InputError message={errors.title} />
                                </div>

                            </div>

                            <div className="px-3">
                                <Button type="submit" className="mt-2 w-24" tabIndex={4} disabled={processing}>
                                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                    Create
                                </Button>
                            </div>


                        </form>

                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
