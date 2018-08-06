import React from 'react'

import { ParagraphBlock, HeadingBlock } from './blocks'

export default ({blocks}) => blocks.map(block => {
  console.log(block)
  switch (block.type) {

    case 'heading_block':
      return <HeadingBlock content={block.value['heading_text']} size={block.value.size}/>

    case 'paragraph_block':
      return <ParagraphBlock content={block.value.content}/>

    default:
      return <h3>Unknown Block Type: {block.type}</h3>
  }
})