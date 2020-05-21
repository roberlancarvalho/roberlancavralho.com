import React from "react"

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { LightBulb as Light } from "@styled-icons/octicons/LightBulb"

import { Grid } from "@styled-icons/boxicons-solid/Grid"

import { MenuBarWrapper, MenuBarGroup, MenuBarLink, MenuBarItem } from "./styled"

const MenuBar = () => (
    <MenuBarWrapper>
        <MenuBarGroup>
            <MenuBarLink to="/" title="Voltar para Home">
                <MenuBarItem>
                    <Home />
                </MenuBarItem>
            </MenuBarLink>
            <MenuBarLink to="/search/" title="Pesquisar">
                <MenuBarItem>
                    <Search />
                </MenuBarItem>
            </MenuBarLink>
        </MenuBarGroup>
        <MenuBarGroup>
            <MenuBarItem title="Mudar o tema">
                <Light />
            </MenuBarItem> 
            <MenuBarItem title="Mudar visualização">
                <Grid />
            </MenuBarItem>
            <MenuBarItem title="Ir para o Topo">
                <Arrow />
            </MenuBarItem>
        </MenuBarGroup>
    </MenuBarWrapper>
)

export default MenuBar