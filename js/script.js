const app = new Vue({
    el: '#app',
    data: {
        students,
    },
    methods: {
        getAverageGrades(valutation){
            sum = 0;
            valutation.forEach((voto) => {
                sum += voto;
            });

            return (sum / valutation.length).toFixed(1);
        },
        getAverageGradesTot(vote){
            let allVotes = [];
            for(subject in vote) {
                allVotes = allVotes.concat(vote[subject]);
            }
            return this.getAverageGrades(allVotes);
        },
        isFailed(voti){
            return this.getAverageGradesTot(voti) < 6;

        },
        
    }
})