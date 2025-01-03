import { FC, useCallback } from 'react';
import { Screen } from '@/components/screen/Screen';
import { AppStackScreenProps } from '@/navigators/AppNavigator';
import { screenName } from '@/navigators/screenName';
import styled from '@emotion/native';
import { AlbumHeader, DummyContainer, AlbumBlurHeader } from './components';
import { Text, ErrorView } from '@/components';
import { FlatList } from 'react-native';
import TopAlbumRecordItemSkeleton, {
  dummyArray as loadingDummyArray,
} from '@/components/TopAlbumRecordItemSkeleton';
import { TrackItem, DummyTrackItem } from './components/TrackItem';
import { useGetAlbumInfoQuery } from '@/services/apiRTK';
import { skipToken } from '@reduxjs/toolkit/query';

const EmptyListContainer = styled.View({
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

const ItemSeparator = styled.View({ height: 10 });

interface AlbumScreenProps
  extends AppStackScreenProps<typeof screenName.appStack.album> {}

export const AlbumScreen: FC<AlbumScreenProps> = ({
  navigation,
  route: { params },
}) => {
  const {
    data,
    error,
    isFetching: isLoading,
    refetch,
  } = useGetAlbumInfoQuery(params.albumMbid ?? skipToken);

  const onRetryHandler = () => {
    if (params?.artistName) {
      refetch();
    }
  };

  if (error && !isLoading) {
    return (
      <Container preset="fixed" unsafe>
        <AlbumHeader
          title={params?.albumName}
          subtitle={params?.artistName}
          titleMode="center"
          leftIcon="back"
          onLeftPress={() => navigation.goBack()}
        />
        <ErrorView onRetryHandler={onRetryHandler} />
      </Container>
    );
  }

  const renderItem = useCallback(
    ({ item }: { item: Track }) => (
      <TrackItem track={item} onPress={() => null} />
    ),
    [],
  );

  return (
    <Container preset="fixed" unsafe>
      {error && !isLoading ? (
        <ErrorView onRetryHandler={onRetryHandler} />
      ) : (
        <FlatList
          ItemSeparatorComponent={ItemSeparator}
          contentContainerStyle={{ flexGrow: 1 }}
          ListEmptyComponent={
            <EmptyListContainer>
              <Text tx="home:empty" />
            </EmptyListContainer>
          }
          ListHeaderComponent={
            <DummyContainer pointerEvents="none">
              <AlbumHeader
                title={params?.albumName}
                subtitle={params?.artistName}
                titleMode="center"
                leftIcon="back"
                onLeftPress={() => navigation.goBack()}
              />
            </DummyContainer>
          }
          ListFooterComponent={<DummyTrackItem />}
          showsVerticalScrollIndicator={false}
          refreshing={isLoading}
          data={isLoading ? loadingDummyArray : data?.album?.tracks.track}
          renderItem={isLoading ? TopAlbumRecordItemSkeleton : renderItem}
        />
      )}
      <AlbumBlurHeader
        title={params?.albumName}
        subtitle={params?.artistName}
        titleMode="center"
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
      />
    </Container>
  );
};

const Container = styled(Screen)({
  flexDirection: 'column',
  paddingHorizontal: 10,
});
