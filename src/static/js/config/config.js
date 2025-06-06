export const CONFIG = {
    API: {
        VERSION: 'v1alpha',
        MODEL_NAME: 'models/gemini-2.0-flash-exp'
    },
    // You can change the system instruction to your liking
    SYSTEM_INSTRUCTION: {
        TEXT: '你是我的得力助手。你可以看到我、听到我，并用语音和文字回复我。如果我问到你不懂的问题，你可以使用谷歌搜索等各类工具来查找答案。你应该优先使用中文与我进行交流，如果我使用英文你也需要使用英文与我交流。',
    },
    // Default audio settings
    AUDIO: {
        SAMPLE_RATE: 16000,
        OUTPUT_SAMPLE_RATE: 24000,      // If you want to have fun, set this to around 14000 (u certainly will)
        BUFFER_SIZE: 2048,
        CHANNELS: 1
    },
    // If you are working in the RoArm branch 
    // ROARM: {
    //     IP_ADDRESS: '192.168.1.4'
    // }
  };
  
  export default CONFIG; 
