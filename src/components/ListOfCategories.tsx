'use client'
import { type Category } from "@/types";
import Link from "next/link";
import { useState } from "react";

function CategoryItem({
    category,
    categories
}:{
    category: Category;
    categories: Category[];
}) {
    const [expanded, setExpanded] = useState<Boolean>(false);

    const hasSubCategories = categories.filter(({parentId}) => {
        return category.id === parentId
    }).length;

    const handleClick = () => setExpanded(value => !value);
    return (
        <li className="ml-4">
            {
                hasSubCategories ? 
                (<button className="mr-2 text-white" type="button" onClick={handleClick}>{expanded ? '-' : '+'}</button>) :
                null
            }
            <Link href={`/${category.id}`}>{category.name}</Link>
            {
                expanded ? 
                (<ListOfCategories categories={categories} parentCategory={category.id}/>) :
                null
            }
        </li>
    )
}

export default function ListOfCategories({
    categories, 
    parentCategory = null
  }: {
    categories: Category[],
    parentCategory?: string | null
  }) {
    const categoriesToRender = categories.filter(({parentId}) => {
      return parentCategory === parentId
    });
    return (
      <ul>
        {
          categoriesToRender.map(category => (
            <CategoryItem key={category.id} categories={categories} category={category} />         
          ))
        }
      </ul>
    )
  }