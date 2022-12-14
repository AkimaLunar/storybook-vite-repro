import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { AccordionItemProps, AccordionListProps } from '../src/index';
import { AccordionItem, AccordionList } from '../src/index';

export default {
  title: 'Content/AccordionList',
  component: AccordionItem,
} as ComponentMeta<typeof AccordionItem>;

const ItemTemplate: ComponentStory<typeof AccordionItem> = (args) => (
  <div style={{ width: '600px' }}>
    <AccordionItem {...args} />
  </div>
);

const lorem =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas cupiditate inventore id voluptatum ipsa. Voluptatibus, id. Deserunt modi labore culpa quis consectetur aut corporis reiciendis, eligendi sit, maxime harum magnam.';

export const Item = ItemTemplate.bind({}) as ComponentStory<
  FunctionComponent<AccordionItemProps>
>;
Item.args = {
  children: <p>{lorem}</p>,
};

const ListTemplate: ComponentStory<typeof AccordionItem> = (args) => (
  <div style={{ width: '600px', height: '100%' }}>
    <AccordionList {...args} />
  </div>
);

export const List = ListTemplate.bind({}) as ComponentStory<
  FunctionComponent<AccordionListProps>
>;

List.args = {
  children: (
    <>
      {Array.from({ length: 3 }, (_, i) => (
        <AccordionItem key={i} title={`AccordionItem ${i + 1}`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vitae nulla nam cumque ducimus enim beatae, aliquid quis pariatur! Rerum delectus amet labore dicta repudiandae autem id odit sit ut.
          </p>
        </AccordionItem>
      ))}
    </>
  ),
};
