import css from './loadingComponent.module.css';

function LoadingComponent() {

    return (
        <div className={css.loading} id={'loading'}></div>
    );
}

export {LoadingComponent};
