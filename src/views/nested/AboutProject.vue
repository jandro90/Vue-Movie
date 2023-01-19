<template>
    <div class="container">
        <h1 class="text-center m-2">About the project</h1>
        <hr />
        <div class="container-fluid">
            <p>
                I have created this project to use all the knowledge I have
                learned about <b>Vue 3 and the composition API.</b> I have tried
                to use most of the things that a framework / library can provide
                to build applications.
            </p>
            <p>For example:</p>
            <ul>
                <li><b>Components:</b></li>
                <ul>
                    <li>Create custom components looking for reusability</li>
                    <li>Using Props</li>
                    <li>Using Emitters</li>
                    <li>Access to DOM elements</li>
                    <li>Creating views with bussiness logic</li>
                    <li>Creating reusable composables</li>
                </ul>
                <li><b>Router:</b></li>
                <ul>
                    <li>Creating all routes with Lazzy Load</li>
                    <li>Using Guards in differents pages</li>
                    <li>
                        Using Router View with slots, for customs links styles
                        and control active route
                    </li>
                    <li>Using Main Routes and Child Routes</li>
                    <li>Creating simple menú</li>
                </ul>
                <li><b>Vuex:</b></li>
                <ul>
                    <li>
                        Split store in modules, based in app requirements,
                        looking for easy maintenance
                    </li>
                    <li>Creating and using async actions</li>
                    <li>Creating and using mutations</li>
                    <li>Creating and using getters</li>
                </ul>
                <li><b>Extras:</b></li>
                <ul>
                    <li>
                        The objective is that when a user is logged in, to
                        persist that login avoiding to lose the user when the
                        page is refreshed. The main objective is not to show the
                        login page if the user is logged in and in case the user
                        is NOT logged in, to avoid enter in any path of the
                        application.
                    </li>
                    <li>
                        API: <a href="https://www.tvmaze.com/api" target="_blank"> TV Maze</a>
                    </li>
                </ul>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutProject",
};
</script>
