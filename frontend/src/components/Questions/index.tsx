'use client';

import React, { FunctionComponent } from 'react';

import questions from '@/common/texts/questions';
import MenuAccordion from '@/common/components/MenuAccordion';

export const Questions: FunctionComponent = () => {
    return <MenuAccordion title={questions.title} groups={questions.groups} />;
};
