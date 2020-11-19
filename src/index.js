import { rootPageModule } from "./rootPageModule.js"

import './reset.css'
import './style.css'

const root = document.querySelector('#root')

rootPageModule.displayAppInterface(root)