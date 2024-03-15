import { Layout } from "antd"
import { observer } from "mobx-react"
import { Search } from "../components/Search"
import hotelsStore from "../store/hotelsStore"
import React from "react"
import { Hotel } from "../components/Hotel"
export const MainPage: React.FC = observer(() => {
    return (
        <Layout style={{ height: '100%', paddingTop: "35px" }}>
            <Layout>
                <div style={{ display: 'flex', height: '100%' }}>
                    <div style={{ flex: 1, padding: '20px' }}>
                        <div style={{ height: '100%' }}>
                            {hotelsStore.hotels && hotelsStore.hotels.find(h => h) ? hotelsStore.hotels.map((h) =>
                                <Hotel key={h.id} {...h} />)
                                :
                                <div>Отели не найдены</div>
                            }
                        </div>
                    </div>
                    <div style={{ width: '250px', background: '#bcbdbd', padding: '20px', paddingRight: "10px" }}>
                        <Search />
                    </div>
                </div>
            </Layout>
        </Layout>
    )
})