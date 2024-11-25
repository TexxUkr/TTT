import { FC } from 'react';
import { Screen } from '@/components/screen/Screen';
import { AppStackScreenProps } from '@/navigators/AppNavigator';
import { screenName } from '@/navigators/screenName';
import styled from '@emotion/native';
import { ArtistHeader, DummyContainer, ArtistBlurHeader } from './components';
import { Text, ErrorView } from '@/components';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useGetArtistInfoQuery } from '@/services/apiRTK';
import { skipToken } from '@reduxjs/toolkit/query';
export const dummyArray = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

interface ArtistScreenProps
  extends AppStackScreenProps<typeof screenName.appStack.artist> {}

export const ArtistScreen: FC<ArtistScreenProps> = ({
  navigation,
  route: { params },
}) => {
  const {
    data,
    error,
    isFetching: isLoading,
    refetch,
  } = useGetArtistInfoQuery(params.artistName ?? skipToken);

  const onRetryHandler = () => {
    if (params?.artistName) {
      refetch();
    }
  };

  if (error && !isLoading) {
    return (
      <Container preset="fixed" unsafe>
        <ArtistHeader
          title={params?.artistName}
          titleMode="center"
          leftIcon="back"
          onLeftPress={() => navigation.goBack()}
        />
        <ErrorView onRetryHandler={onRetryHandler} />
      </Container>
    );
  } else {
    return (
      <>
        <Container preset="scroll" unsafe>
          <DummyContainer pointerEvents="none">
            <ArtistHeader
              title={params?.artistName}
              titleMode="center"
              leftIcon="back"
              onLeftPress={() => navigation.goBack()}
            />
          </DummyContainer>
          {isLoading ? (
            dummyArray.map((_, i) => (
              <SkeletonPlaceholder key={i}>
                <SkeletonPlaceholder.Item
                  width={'100%'}
                  height={20}
                  borderRadius={15}
                  marginBottom={10}
                />
              </SkeletonPlaceholder>
            ))
          ) : (
            <Text>{data?.artist?.bio.content}</Text>
          )}
        </Container>
        <ArtistBlurHeader
          title={params?.artistName}
          titleMode="center"
          leftIcon="back"
          onLeftPress={() => navigation.goBack()}
        />
      </>
    );
  }
};

const Container = styled(Screen)({
  flexDirection: 'column',
  paddingHorizontal: 10,
});
