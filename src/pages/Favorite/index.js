import React from 'react'


import Cards from "../../components/Cards";
import EmptyMessage from "../../components/EmptyMessage";
import Layout from "../../UI/Layout";
import Button from "../../UI/Button";

import { useAppContext } from "../../context";
function Favorite() {
    const { favorites, handleClearFavorites, tvFavorites, handleClearTvFavorite, movieView } = useAppContext();
    if (movieView) {
        return (
            <Layout title='Favorite'>
                {tvFavorites?.length ? (
                    <>
                        <Cards title="Favorite" data={tvFavorites} />
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button onClick={handleClearTvFavorite()}>
                                Clear
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        <Cards title="Favorite" data={tvFavorites} />
                        <EmptyMessage msg="Favorite tv series list is empty" />
                    </>
                )}
            </Layout>
        )
    } else {
        return (
            <Layout title='Favorite'>
                {favorites?.length ? (
                    <>
                        <Cards title="Favorite" data={favorites} />
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button handleClick={handleClearFavorites()}>
                                Clear
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        <Cards title="Favorite" data={favorites} />
                        <EmptyMessage msg="Favorite movie list is empty" />
                    </>
                )}
            </Layout>
        )
    }
}
export default Favorite