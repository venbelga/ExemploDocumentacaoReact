import {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, Text, View} from "react-native";

type Movie = {
    id: string,
    title: string,
    releaseYear: string
}

type MoviesResponse = {
    title: string,
    description: string,
    movies: Movie[]
}

export function Networking(){
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<Movie[]>([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await fetch('https://reactnative.dev/movies.json');          
                const retorno = (await response.json()) as MoviesResponse;
                setData(retorno.movies);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        void getMovies();
    }, []);

    return (
        <View style={{flex: 1, padding: 24}}>
            {isLoading ? <ActivityIndicator/> :(
                <FlatList 
                    data={data}
                    keyExtractor={({id}) => id}
                    renderItem={({item}) => (
                        <Text>
                            {item.title}, {item.releaseYear}
                        </Text>
                    )}
                />
            )}
        </View>
    );

}