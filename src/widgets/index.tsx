import { AppEvents, declareIndexPlugin, QueueInteractionScore, ReactRNPlugin, WidgetLocation } from '@remnote/plugin-sdk';
import '../style.css';
import '../App.css';

async function onActivate(plugin: ReactRNPlugin) {
  await plugin.app.registerWidget(
    "popup", 
    WidgetLocation.FloatingWidget,{
      dimensions: {
        width: 300, 
        height: "auto",
      }
    }
  );

  plugin.event.addListener(AppEvents.QueueCompleteCard, undefined,async (data) => {
    if ((data.score as QueueInteractionScore) === QueueInteractionScore.AGAIN) {
      setTimeout(async () => {
        await plugin.window.openFloatingWidget(
          "popup",
          {top: -180},
          "rn-queue__show-answer-btn"
        );
      }, 25);
    }
  });

}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
