import React from 'react'
import icon1 from "../../../../assets/telegramlogo.jpg"
import icon2 from "../../../../assets/images.png"
import icon3 from "../../../../assets/Без названия (1).jpg"
import s from "../../HW15.module.css"
// добавить в проект иконки и импортировать
const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...



    //sort=== up? down : up
    return sort=== up? down : up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? icon1
        : sort === up
            ? icon2
            : icon3

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >

            <img className={s.img}
                id={id + '-icon-' + sort}
                src={icon}
            />

        </span>
    )
}

export default SuperSort
