import {format, register } from 'timeago.js' //register 한국어 선택
import koLocale from 'timeago.js/lib/lang/ko' //한국어 선택

register('ko', koLocale)

export default function timeago (time) {
    return format(time,'ko')
}
