import React, { useEffect, useRef, useState } from 'react';
import { fetchTopTSProjects } from './api/github';
import { IRepository, Status } from './types/repositoryTypes.ts';
import { GlobalStyle } from './styles.ts';
import Header from './components/Header/Header.tsx';
import Pagination from './components/Pagination/Pagination.tsx';
import Preloader from './components/Preloader/Preloader.tsx';
import Cards from './components/Cards/Cards.tsx';

const App: React.FC = () => {
  const [repositoriesData, setRepositoriesData] = useState<IRepository | null>(null);
  const [status, setStatus] = useState<Status>(Status.Idle);
  const [page, setPage] = useState(1);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    const controller = new AbortController();
    controllerRef.current = controller;
    loadRepositories(page, controller);
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, [page]);

  const loadRepositories = async (currentPage: number, controller: AbortController) => {
    setStatus(Status.Loading);
    try {
      const data = await fetchTopTSProjects(currentPage, controller);
      setRepositoriesData(data);
      setStatus(Status.Success);
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.name === 'CanceledError') {
          console.log('Запрос был отменён');
        } else {
          console.error('Ошибка:', err.message);
          setStatus(Status.Error);
        }
      }
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const renderContent = () => {
    switch (status) {
      case Status.Error:
        return <div>Произошла ошибка получения данных</div>;
      default:
        return (
          <main>
            <Pagination page={page} onNext={handleNextPage} onPrev={handlePrevPage} isPrevDisabled={page === 1} />
            {status === Status.Loading ? <Preloader /> : <Cards repositories={repositoriesData?.items} />}
          </main>
        );
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header count={repositoriesData?.total_count || 0} />
      {renderContent()}
    </>
  );
};

export default App;
