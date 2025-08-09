'use client';

import React, { use } from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
    params: Promise<{ id: string }>;
}

export default function Page(props: PageProps) {
    const params = use(props.params);
    const router = useRouter();
    return (
        <PromotionFormModal
            companyId={params.id}
            show={true}
            onClose={() => router.back()}
        />
    );
}