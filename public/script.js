document.getElementById('drawNetwork').addEventListener('click', function() {
    const learningRate = parseFloat(document.getElementById('learningRate').value);
    const activationFunction = document.getElementById('activationFunction').value;
    const neuronCount = parseInt(document.getElementById('neuronCount').value);
    const layerCount = parseInt(document.getElementById('layerCount').value);

    createAndTrainNetwork(learningRate, activationFunction, neuronCount, layerCount);
});

async function createAndTrainNetwork(learningRate, activationFunction, neuronCount, layerCount) {
    const model = tf.sequential();
    model.add(tf.layers.dense({units: neuronCount, activation: activationFunction, inputShape: [1]}));
    for (let i = 1; i < layerCount; i++) {
        model.add(tf.layers.dense({units: neuronCount, activation: activationFunction}));
    }
    model.add(tf.layers.dense({units: 1}));

    model.compile({
        optimizer: tf.train.adam(learningRate),
        loss: 'meanSquaredError',
        metrics: ['accuracy']
    });

    const xs = tf.linspace(0, 1, 100).reshape([100, 1]);
    const ys = tf.randomNormal([100, 1]);

    await model.fit(xs, ys, {epochs: 10});
    visualizeResults(model);
}

function visualizeResults(model) {
    const xs = tf.linspace(0, 1, 100).dataSync();
    const ys = model.predict(tf.tensor(xs, [100, 1])).dataSync();

    const chartData = {
        labels: xs,
        datasets: [{
            label: 'Predictions',
            data: ys,
            borderColor: 'blue',
            backgroundColor: 'transparent'
        }]
    };

    const chartOptions = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Input'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Output'
                }
            }
        }
    };

    const ctx = document.getElementById('chart').getContext('2d');
    const lineChart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions
    });
}




