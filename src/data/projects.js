import { WiDayThunderstorm } from 'react-icons/wi'
import projectImage from '../assets/images/the_imam.png'
import nexoraMathImage from '../assets/images/math.png'
import hidrojenImage from '../assets/images/hidrojen.png'
import chatbotsImage from '../assets/images/chatbots.png'
import vortezImage from '../assets/images/vorteza2.png'
import theImamImage from '../assets/images/the_imam.png'
import theImam1 from '../assets/images/the_imam_1.png'
import theImam2 from '../assets/images/the_imam_2.png'
import theImam3 from '../assets/images/the_imam_3.png'
import theImam4 from '../assets/images/the_imam_4.png'
import theImam5 from '../assets/images/the_imam_5.png'
import theImam6 from '../assets/images/the_imam_6.png'
import theImam7 from '../assets/images/the_imam_7.png'
import nexoraMath1 from '../assets/images/math_1.png'
import nexoraMath2 from '../assets/images/math_2.png'
import nexoraMath3 from '../assets/images/math_3.png'
import nexoraMath4 from '../assets/images/math_4.png'
import nexoraMath5 from '../assets/images/math_5.png'
import nexoraMath6 from '../assets/images/math_6.png'
import nexoraMath7 from '../assets/images/math_7.png'
import nexoraMath8 from '../assets/images/math_8.png'
import nexoraMath9 from '../assets/images/math_9.png'
import nexoraMath10 from '../assets/images/math_10.png'
import vorteza1 from '../assets/images/vortezaerp_1.png'
import vorteza2 from '../assets/images/vortezaerp_2.png'
import vorteza3 from '../assets/images/vortezaerp_3.png'
import vorteza4 from '../assets/images/vortezaerp_4.png'
import vorteza5 from '../assets/images/vortezaerp_5.png'
import vorteza6 from '../assets/images/vortezaerp_6.png'
import vorteza7 from '../assets/images/vortezaerp_7.png'
import vorteza8 from '../assets/images/vortezaerp_8.png'
import vorteza9 from '../assets/images/vortezaerp_9.png'
import vorteza10 from '../assets/images/vortezaerp_10.png'
import vorteza11 from '../assets/images/vortezaerp_11.png'
import vorteza12 from '../assets/images/vortezaerp_12.png'
import vorteza13 from '../assets/images/vortezaerp_13.png'
import vorteza14 from '../assets/images/vortezaerp_14.png'
import vorteza15 from '../assets/images/vortezaerp_15.png'
import vorteza16 from '../assets/images/vortezaerp_16.png'
import vorteza17 from '../assets/images/vortezaerp_17.png'
import vorteza18 from '../assets/images/vortezaerp_18.png'
import vorteza19 from '../assets/images/vortezaerp_19.png'
import vorteza20 from '../assets/images/vortezaerp_20.png'
import vorteza21 from '../assets/images/vortezaerp_21.png'


// Proje verileri
export const projects = {
  1: {
    id: 1,
    title: "THE IMAM - Islamic Law Assistant (Mobile App)",
    subtitle: "Software and Artificial Intelligence",
    buttons: [ "Language", "Download", "Share", "Ask Question", "GitHub", "Demo"],
    blocks: [
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Modern teknolojilerle dini içerikleri birleştiren"
          },
          {
            "type": "bold",
            "content": " The Imam"
          },
          {
            "type": "normal",
            "content": ", kullanıcıların İslami kaynaklardan doğru bilgilere hızlıca ulaşmasını sağlayan yenilikçi bir mobil uygulama. Bu proje, "
          },
          {
            "type": "bold",
            "content": "Retrieval Augmented Generation (RAG) "
          },
          {
            "type": "normal",
            "content": "teknolojisini kullanarak, geleneksel dini metinleri yapay zeka ile buluşturuyor. RAG, yapay zekanın bilgi kaynaklarından öğrenmesini ve kullanıcı sorularına kaynak göstererek cevap vermesini sağlayan bir yaklaşım."
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "image",
        content: [
          theImam1,
          theImam2,
          theImam3,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '250px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },

      {
        state: "Title",
        content: {
          "normal": "Proje Hakkında",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: {
          "bold": "The Imam",
          "normal": ", geniş bir İslami kaynak koleksiyonunu vektör tabanlı arama sistemi ile indeksleyen, kullanıcı sorularına kaynak göstererek cevap veren bir AI asistanı. Uygulama, Kuran-ı Kerim, Tefsir kitapları, Fıkıh eserleri ve diğer önemli İslami kaynakları içeren kapsamlı bir veritabanına sahiptir. OpenAI embeddings, ChromaDB ve LangChain/LangGraph gibi modern AI araçları kullanılarak geliştirilmiştir."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Ana Özellikler",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "🤖 AI Destekli Sohbet: Kullanıcı sorularına Kuran, tefsir, fıkıh ve diğer İslami kaynaklardan cevap veren akıllı asistan"
            },
            {
              "type": "normal",
              "content": "📚 Kaynak Gösterimi: Her cevap için ilgili sure ve ayet referansları"
            },
            {
              "type": "normal",
              "content": "🔍 Semantic Search: Anlama dayalı vektör araması ile en ilgili içerikleri bulma"
            },
            {
              "type": "normal",
              "content": "💬 Sohbet Geçmişi: Kullanıcı konuşmalarını MySQL veritabanında kaydetme ve yönetme"
            },
            {
              "type": "normal",
              "content": "🔐 JWT Authentication: Token tabanlı güvenli kullanıcı kimlik doğrulama"
            },
            {
              "type": "normal",
              "content": "📱 Modern Mobil Arayüz: Flutter ile geliştirilmiş kullanıcı dostu tasarım"
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      
      // Line
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      {
        state: "image",
        content: [
          theImam4,
          theImam5,
          theImam6,
          theImam7,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '250px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },

      // Line
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      // Title
      {
        state: "Title",
        content: {
          "normal": " Nasıl Çalışıyor?",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "The Imam, iki ana parçadan oluşuyor: "
          },
          {
            "type": "bold",
            "content": "mobil uygulama"
          },
          {
            "type": "normal",
            "content": " (Flutter ile geliştirildi) ve "
          },
          {
            "type": "bold",
            "content": "sunucu tarafı "
          },
          {
            "type": "normal",
            "content": "(Python ile yazıldı)."
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Sunucu Tarafı (Backend)",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Backend, "
          },
          {
            "type": "bold",
            "content": "Python"
          },
          {
            "type": "normal",
            "content": " ve"
          },
          {
            "type": "bold",
            "content": " FastAPI"
          },
          {
            "type": "normal",
            "content": " framework'ü ile geliştirildi. Sistem, kullanıcı sorularını alıp, İslami kaynaklarda arama yapıyor ve cevapları hazırlıyor. Temel olarak şu adımları izliyor:"
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Vektörleştirme (Embedding): Tüm İslami metinler (Kuran, tefsir, fıkıh vb.) OpenAI'nin text-embedding-3-large modeli kullanılarak vektörlere dönüştürülüyor. Bu işlem, metinleri sayısal değerlere çevirerek bilgisayarın anlayabileceği forma getiriyor. Uzun metinler, RecursiveCharacterTextSplitter kullanılarak yaklaşık 50,000 karakterlik parçalara bölünüyor. Bu parçalama işlemi, OpenAI'nin token limitlerini aşmamak ve daha verimli arama yapabilmek için gerekli."
            },
            {
              "type": "normal",
              "content": "Vektör Veritabanı (ChromaDB): Vektörleştirilmiş metinler, ChromaDB adı verilen özel bir vektör veritabanına kaydediliyor. Her metin parçası, hangi sure, ayet veya kitaptan geldiğini gösteren metadata ile birlikte saklanıyor."
            },
            {
              "type": "normal",
              "content": "Semantic Search (Anlama Dayalı Arama): Kullanıcı bir soru sorduğunda, sistem önce bu soruyu vektörleştiriyor, sonra ChromaDB'de cosine similarity (kosinüs benzerliği) kullanarak en ilgili 3 kaynağı buluyor. Bu arama yöntemi, geleneksel kelime eşleştirmesinden farklı olarak metinlerin anlamına da bakıyor."
            },
            {
              "type": "normal",
              "content": "LLM ile Cevap Oluşturma: Bulunan kaynaklar, GPT-4o-mini modeline context olarak gönderiliyor ve kullanıcının sorusuna uygun bir cevap oluşturuluyor. LangChain ve LangGraph kütüphaneleri, bu süreci yönetiyor ve AI agent'ın kaynakları doğru şekilde kullanmasını sağlıyor."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
          listStyle: 'decimal',
        }
      },
      {
        state: "Title",
        content: {
          "normal": " Mobil Uygulama (Frontend)",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },
      
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Mobil uygulama, "
          },
          {
            "type": "bold",
            "content": "Flutter "
          },
          {
            "type": "normal",
            "content": "framework'ü ile geliştirildi. "
          },
          {
            "type": "bold",
            "content": "Dart "
          },
          {
            "type": "normal",
            "content": "programlama dili kullanılarak yazıldı ve"
          },
          {
            "type": "bold",
            "content": " Material Design 3 "
          },
          {
            "type": "normal",
            "content": "prensiplerine uygun olarak tasarlandı. Uygulama, "
          },
          {
            "type": "bold",
            "content": "RESTful API "
          },
          {
            "type": "normal",
            "content": "ile backend ile iletişim kuruyor. Kullanıcılar:"
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Sorularını yazabiliyor"
            },
            {
              "type": "normal",
              "content": "Cevapları anlık olarak alabiliyor"
            },
            {
              "type": "normal",
              "content": "Kaynak linklerine tıklayarak ilgili bölümlere gidebiliyor"
            },
            {
              "type": "normal",
              "content": "SharedPreferences ile yerel olarak saklanan önceki konuşmalarını görebiliyor"
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },
      {
        state: "Title",
        content: {
          "normal": " RAG Pipeline: İşleyiş Süreci",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Sistem, "
          },
          {
            "type": "bold",
            "content": "RAG (Retrieval Augmented Generation) "
          },
          {
            "type": "normal",
            "content": "yaklaşımını kullanarak çalışıyor. Bu süreç şu adımlardan oluşuyor:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Indexing (İndeksleme): Tüm İslami metinler JSON formatından okunuyor, text chunking ile parçalara bölünüyor ve OpenAI embeddings API'si kullanılarak vektörleştiriliyor. Her chunk için metadata (sure numarası, ayet numaraları, kaynak bilgisi) saklanıyor."
            },
            {
              "type": "normal",
              "content": "Query Processing: Kullanıcı sorduğunda, soru da aynı şekilde vektörleştiriliyor."
            },
            {
              "type": "normal",
              "content": "Retrieval: ChromaDB'de similarity search yapılarak en ilgili 3 doküman bulunuyor. Bu işlem, cosine similarity metriği kullanılarak gerçekleştiriliyor."
            },
            {
              "type": "normal",
              "content": "Generation: Bulunan kaynaklar, LangChain üzerinden GPT-4o-mini modeline context olarak gönderiliyor. Model, bu kaynakları kullanarak kullanıcının sorusuna cevap oluşturuyor."
            },
            {
              "type": "normal",
              "content": "Response: Cevap, kaynak metadata'sı ile birlikte kullanıcıya döndürülüyor. Frontend'te, bu kaynaklar tıklanabilir linkler olarak gösteriliyor."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
          listStyle: 'decimal',
        }
      },
    ],
    english_blocks: [
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Combining religious content with modern technologies, "
          },
          {
            "type": "bold",
            "content": "The Imam"
          },
          {
            "type": "normal",
            "content": " is an innovative mobile application that enables users to quickly access accurate information from Islamic sources. This project brings together traditional religious texts and artificial intelligence using "
          },
          {
            "type": "bold",
            "content": "Retrieval Augmented Generation (RAG) "
          },
          {
            "type": "normal",
            "content": "technology. RAG is an approach that allows AI to learn from knowledge sources and answer user questions by providing source references."
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "image",
        content: [
          theImam1,
          theImam2,
          theImam3,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '250px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },

      {
        state: "Title",
        content: {
          "normal": "About the Project",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: {
          "bold": "The Imam",
          "normal": " is an AI assistant that indexes a comprehensive collection of Islamic sources using a vector-based search system, providing source-referenced answers to user questions. The application has a comprehensive database including the Holy Quran, Tafsir books, Fiqh works, and other important Islamic sources. It has been developed using modern AI tools such as OpenAI embeddings, ChromaDB, and LangChain/LangGraph."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Key Features",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "🤖 AI-Powered Chat: Intelligent assistant that answers user questions from the Quran, Tafsir, Fiqh, and other Islamic sources"
            },
            {
              "type": "normal",
              "content": "📚 Source References: Relevant surah and verse references for each answer"
            },
            {
              "type": "normal",
              "content": "🔍 Semantic Search: Finding the most relevant content through meaning-based vector search"
            },
            {
              "type": "normal",
              "content": "💬 Chat History: Saving and managing user conversations in MySQL database"
            },
            {
              "type": "normal",
              "content": "🔐 JWT Authentication: Secure token-based user authentication"
            },
            {
              "type": "normal",
              "content": "📱 Modern Mobile Interface: User-friendly design developed with Flutter"
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      
      // Line
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      {
        state: "image",
        content: [
          theImam4,
          theImam5,
          theImam6,
          theImam7,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '250px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },

      // Line
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      // Title
      {
        state: "Title",
        content: {
          "normal": "How It Works?",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "The Imam consists of two main components: "
          },
          {
            "type": "bold",
            "content": "mobile application"
          },
          {
            "type": "normal",
            "content": " (developed with Flutter) and "
          },
          {
            "type": "bold",
            "content": "server-side "
          },
          {
            "type": "normal",
            "content": "(written in Python)."
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Server Side (Backend)",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "The backend was developed with "
          },
          {
            "type": "bold",
            "content": "Python"
          },
          {
            "type": "normal",
            "content": " and the "
          },
          {
            "type": "bold",
            "content": "FastAPI"
          },
          {
            "type": "normal",
            "content": " framework. The system takes user questions, searches in Islamic sources, and prepares answers. It essentially follows these steps:"
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Vectorization (Embedding): All Islamic texts (Quran, Tafsir, Fiqh, etc.) are converted to vectors using OpenAI's text-embedding-3-large model. This process converts texts into numerical values to make them understandable by computers. Long texts are divided into approximately 50,000 character chunks using RecursiveCharacterTextSplitter. This chunking process is necessary to avoid exceeding OpenAI's token limits and to enable more efficient searching."
            },
            {
              "type": "normal",
              "content": "Vector Database (ChromaDB): Vectorized texts are stored in a special vector database called ChromaDB. Each text chunk is stored with metadata showing which surah, verse, or book it came from."
            },
            {
              "type": "normal",
              "content": "Semantic Search (Meaning-Based Search): When a user asks a question, the system first vectorizes the question, then finds the 3 most relevant sources in ChromaDB using cosine similarity. This search method looks at the meaning of texts, unlike traditional word matching."
            },
            {
              "type": "normal",
              "content": "LLM Answer Generation: The found sources are sent to the GPT-4o-mini model as context, and an appropriate answer is generated for the user's question. LangChain and LangGraph libraries manage this process and ensure that the AI agent uses the sources correctly."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
          listStyle: 'decimal',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Mobile Application (Frontend)",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },
      
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "The mobile application was developed with the "
          },
          {
            "type": "bold",
            "content": "Flutter "
          },
          {
            "type": "normal",
            "content": "framework. It was written using the "
          },
          {
            "type": "bold",
            "content": "Dart "
          },
          {
            "type": "normal",
            "content": "programming language and designed according to "
          },
          {
            "type": "bold",
            "content": "Material Design 3 "
          },
          {
            "type": "normal",
            "content": "principles. The application communicates with the backend via "
          },
          {
            "type": "bold",
            "content": "RESTful API. "
          },
          {
            "type": "normal",
            "content": "Users can:"
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Write their questions"
            },
            {
              "type": "normal",
              "content": "Receive answers instantly"
            },
            {
              "type": "normal",
              "content": "Click on source links to navigate to relevant sections"
            },
            {
              "type": "normal",
              "content": "View previous conversations stored locally using SharedPreferences"
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "RAG Pipeline: Process Flow",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "The system works using the "
          },
          {
            "type": "bold",
            "content": "RAG (Retrieval Augmented Generation) "
          },
          {
            "type": "normal",
            "content": "approach. This process consists of the following steps:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Indexing: All Islamic texts are read from JSON format, divided into chunks using text chunking, and vectorized using the OpenAI embeddings API. Metadata (surah number, verse numbers, source information) is stored for each chunk."
            },
            {
              "type": "normal",
              "content": "Query Processing: When a user asks a question, the question is also vectorized in the same way."
            },
            {
              "type": "normal",
              "content": "Retrieval: A similarity search is performed in ChromaDB to find the 3 most relevant documents. This operation is performed using the cosine similarity metric."
            },
            {
              "type": "normal",
              "content": "Generation: The found sources are sent to the GPT-4o-mini model as context via LangChain. The model uses these sources to create an answer to the user's question."
            },
            {
              "type": "normal",
              "content": "Response: The answer is returned to the user along with source metadata. In the frontend, these sources are displayed as clickable links."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
          listStyle: 'decimal',
        }
      },
    ],
    image: theImamImage,
    description: "İslam şeriati konularında kullanıcılara yardımcı olmak için geliştirilmiş modern bir mobil uygulama. Kullanıcılar İslami hukuk konularında sorular sorabilir ve detaylı cevaplar alabilirler.",
    technologies: ["FastAPI", "LangChain", "Flutter", "MySQL"],
    link: "#",
    github: "#",
    fullDescription: "THE IMAM, İslami hukuk ve şeriat konularında kullanıcılara yardımcı olmak için geliştirilmiş kapsamlı bir mobil uygulamadır. Modern yapay zeka teknolojileri kullanılarak geliştirilmiş bu uygulama, kullanıcıların İslami konularda sorularını yanıtlayabilir ve detaylı bilgi sağlayabilir. FastAPI ile güçlü bir backend altyapısı, LangChain ile gelişmiş dil modeli entegrasyonu ve Flutter ile platformlar arası uyumlu bir kullanıcı arayüzü sunmaktadır."
  },
  2: {
    id: 2,
    title: "Nexora Math: Zeka Sorularıyla Beyin Antrenmanı Yapan Bir Oyun Deneyimi",
    subtitle: "Software and Artificial Intelligence",
    buttons: [ "Language", "Download", "Share", "Ask Question", "GitHub", "Demo"],
    blocks: [
       // Title
      {
        state: "Title",
        content: {
          "normal": "Giriş: Problem Çözme Becerisi Neden Bu Kadar Önemli?",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
       // Text Tek
      {
        state: "Text",
        content: {
          "normal": "Günlük hayatımızda sürekli problemlerle karşılaşıyoruz. İş yerinde karmaşık durumları çözmek, kişisel hayatımızda mantıklı kararlar vermek, yeni teknolojileri anlamak... Tüm bunlar için güçlü bir problem çözme becerisine ihtiyacımız var. Ancak bu beceri, doğuştan gelen bir yetenek değil; geliştirilebilir bir zihinsel kas."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      // Text Tek
      {
        state: "Text",
        content: {
          "normal": "Zeka soruları, mantık bulmacaları ve IQ testleri, beynimizi antrenman yaptıran en etkili yöntemlerden biridir. Bu tür sorular, sadece \"doğru cevabı bulmak\" değil; düşünme sürecini geliştirmek, analitik becerileri güçlendirmek ve yaratıcı çözümler bulmak için tasarlanmıştır. Ancak çoğu zeka soruları uygulaması, kullanıcıya sadece soruları sunar ve pasif bir deneyim sunar."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "İşte bu düşünceyle yola çıktık ve "
          },
          {
            "type": "bold",
            "content": "Nexora Math"
          },
          {
            "type": "normal",
            "content": "'i geliştirdik. Nexora Math, zeka sorularını çözmeyi eğlenceli bir oyun deneyimine dönüştürmeyi amaçlayan, modern teknolojilerle geliştirilmiş bir mobil uygulama. Ancak bu sadece bir zeka soruları uygulaması değil; yapay zeka destekli bir rakip, seviye bazlı ilerleme sistemi ve gerçekçi rekabet mekanizmalarıyla donatılmış kapsamlı bir beyin antrenman platformu."
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Nexora Math Nedir?",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      // Text Tek
      {
        state: "Text",
        content: {
          "normal": "Nexora Math, kullanıcıların zeka sorularını çözerek seviye atladıkları, yapay zeka destekli bir bot ile rekabet edebildikleri ve çeşitli oyun modlarında eğlenerek problem çözme becerilerini geliştirdikleri bir mobil uygulamadır. Ancak bu tanım, uygulamanın gerçek değerini tam olarak yansıtmıyor."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Klasik Zeka Soruları Uygulamalarından Farkları",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: {
          "normal": "Çoğu zeka soruları uygulaması, kullanıcıya sorular sorar ve doğru cevabı bekler. Basit, tek boyutlu bir deneyim. Nexora Math ise farklı bir yaklaşım benimsiyor:"
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      // List
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "1. Yapay Zeka Rakip Sistemi: Geleneksel uygulamalarda kullanıcı tek başınadır. Nexora Math'te ise kullanıcı, gerçekçi davranışlar sergileyen bir yapay zeka botu ile rekabet eder. Bu bot, sadece soruları çözmekle kalmaz; düşünür, hata yapar, bazen yavaşlar ve bazen hızlanır. İnsan gibi davranır."
            },
            {
              "type": "normal",
              "content": "2. Seviye Bazlı İlerleme: 100 seviyeden oluşan klasik mod, kullanıcıları adım adım ileriye taşır. Her seviye, önceki seviyelerde geliştirilen problem çözme becerilerinin üzerine inşa edilir. Bu, sadece bir oyun mekaniği değil; zihinsel gelişim için doğru bir yaklaşımdır."
            },
            {
              "type": "normal",
              "content": "3. Çoklu Oyun Modları: Klasik mod, bot modu, günlük bulmaca... Her mod, farklı bir antrenman stiline hitap eder. Bazı kullanıcılar rekabetçi ortamda daha iyi performans gösterirken, bazıları kendi hızlarında ilerlemeyi tercih eder."
            },
            {
              "type": "normal",
              "content": "4. IQ ve İlerleme Takibi: Kullanıcıların performansı, IQ puanı olarak ölçülür ve takip edilir. Bu, sadece bir skor değil; kullanıcının problem çözme yeteneklerinin ve zihinsel gelişiminin somut bir göstergesidir."
            },
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      // Title
      {
        state: "Title",
        content: {
          "normal": "Oyun Mekanikleri ve Zeka Unsurları",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Yapay Zeka Rakip Mantığı",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1.5rem',
          marginTop: '1.4rem',
          color: '#455a64',
        }
      },
      // Text Tek
      {
        state: "Text",
        content: {
          "normal": "Nexora Math'in en ilginç özelliklerinden biri, yapay zeka destekli bot sistemidir. Ancak bu bot, ChatGPT gibi her soruyu anında çözen bir sistem değil. Aksine, gerçekçi bir rakip olarak tasarlandı."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      // Title
      {
        state: "Title",
        content: {
          "normal": "Zorluk Seviyesine Göre Performans",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1.5rem',
          marginTop: '.6rem',
          color: 'var(--text-color)',
        }
      },
      // Text Tek
      
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Bot'un performansı, sorunun zorluk seviyesine göre değişir. Kolay sorularda (seviye 1) bot, 30-35 saniye arasında düşünür ve çözer. Bu, gerçek bir insanın davranışına yakındır. Zor sorularda (seviye 5) ise bot, 5-10 saniye arasında çözüm bulur - ancak bu hız, sorunun zorluğu nedeniyle daha düşük başarı oranıyla dengelenir."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      // Title
      {
        state: "Title",
        content: {
          "normal": "Gerçekçi Davranışlar",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1.5rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      // Text Tek
      
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Bot, sadece soruları çözmekle kalmaz. Düşünme sürecinde kullanıcıya mesajlar gönderir; \"Hmm, ilginç bir soru...\", \"Bir dakika, düşüneyim...\", \"Bu biraz zormuş gibi görünüyor\". Bu mesajlar, bot'un gerçekten düşündüğü hissini verir ve rekabet duygusunu artırır."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      // Title
      {
        state: "Title",
        content: {
          "normal": "Hata Yapma ve Öğrenme",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1.5rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
    
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Bot, her zaman mükemmel değildir. Zor sorularda hata yapabilir ve bu hatalar, kullanıcıya \"Ben de hata yapabilirim, bu normal\" mesajını verir. Bu, problem çözme sürecinde önemli bir psikolojik faktördür ve kullanıcıların hatalarından öğrenmesini destekler."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      // Title
      {
        state: "Title",
        content: {
          "normal": "Hız Farkı ve Tepkiler",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1.5rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      
      // List
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Bot'un çözüm hızı, sorunun zorluğuna ve bot'un \"ruh haline\" göre değişir. Bazen hızlı çözer ve kullanıcıyı zorlar, bazen yavaşlar ve kullanıcıya fırsat verir. Bu dinamik denge, oyunu her zaman ilginç tutar."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Rekabet Duygusunu Artıran Unsurlar",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1.5rem',
          marginTop: '1.4rem',
          color: '#455a64',
        }
      },
      // List
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Lider Tablosu: Global ve yerel lider tabloları, kullanıcıları sürekli olarak motive eder. Kendi performansınızı diğer kullanıcılarla karşılaştırabilir, hedefler belirleyebilirsiniz."
            },
            {
              "type": "normal",
              "content": "XP ve Elmas Sistemi: Her başarılı çözüm, XP (deneyim puanı) kazandırır. Elmaslar ise ipuçları ve özel özellikler için kullanılır. Bu oyun içi ekonomi, kullanıcıları daha fazla oynamaya teşvik eder."
            },
            {
              "type": "normal",
              "content": "Seviye Kilitleme: Yüksek seviyelere ulaşmak için belirli bir IQ seviyesine ulaşmanız gerekir. Bu, kullanıcıları daha fazla pratik yapmaya ve kendilerini geliştirmeye teşvik eder."
            },
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      // Title
      {
        state: "Title",
        content: {
          "normal": "Teknik Perspektif: Mimari ve Algoritmik Düşünce",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      // Title
      {
        state: "Title",
        content: {
          "normal": "Mimari Yaklaşım",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1.8rem',
          marginTop: '.6rem',
          color: '#455a64',
        }
      },
      // Text Tek
      {
        state: "Text",
        content: {
          "normal": "Nexora Math, modern yazılım mimarisi prensiplerine uygun olarak geliştirildi. Backend ve frontend tamamen ayrılmış, her biri kendi sorumluluklarına sahip."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Backend: FastAPI, Python ve Langchain",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1.5rem',
          marginTop: '.6rem',
          color: 'var(--text-color)',
        }
      },
      // Text Tek
      {
        state: "Text",
        content: {
          "normal": "Backend için FastAPI seçmemizin nedeni, modern Python ekosisteminin gücü ve geliştirme hızıydı. FastAPI'nin asenkron desteği, otomatik API dokümantasyonu ve yüksek performansı, projeyi hızlı bir şekilde ilerletmemize olanak sağladı."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      // Text Tek
      {
        state: "Text",
        content: {
          "normal": "Bot servisi için Langchain kullandık. Langchain, yapay zeka modelleriyle etkileşim kurmayı kolaylaştıran güçlü bir framework'tür. Bot'un zeka sorularını çözmesi için Langchain üzerinden OpenAI API'sini entegre ettik. Bu sayede bot, soruları gerçekten analiz edebiliyor ve çözüm üretebiliyor."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      // Text Tek
      {
        state: "Text",
        content: {
          "normal": "Katmanlı mimari yaklaşımı benimsedik: API katmanı, servis katmanı, model katmanı ve veritabanı katmanı. Bu yapı, kodun bakımını kolaylaştırdı, test yazımını hızlandırdı ve gelecekteki geliştirmeleri mümkün kıldı."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Frontend: Flutter ve Cross-Platform",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1.5rem',
          marginTop: '.6rem',
          color: 'var(--text-color)',
        }
      },
      // Text Tek
      {
        state: "Text",
        content: {
          "normal": "Flutter'ı seçmemizin ana nedeni, iOS ve Android için tek bir kod tabanı kullanarak hem zaman hem de kaynak tasarrufu sağlamaktı. Flutter'ın güçlü widget sistemi ve yüksek performansı, modern bir kullanıcı arayüzü oluşturmamıza olanak sağladı."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Veritabanı: MySQL ve Alembic",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1.5rem',
          marginTop: '.6rem',
          color: 'var(--text-color)',
        }
      },
      // Text Tek
      {
        state: "Text",
        content: {
          "normal": "MySQL'i ilişkisel veritabanı olarak seçtik ve Alembic ile versiyonlu migration sistemi kurduk. Bu sayede veritabanı değişikliklerini güvenli bir şekilde yönetebildik ve proje geliştikçe şemayı güncelleyebildik."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Ölçeklenebilirlik ve Genişletilebilirlik",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1.8rem',
          marginTop: '1.2rem',
          color: '#455a64',
        }
      },
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Modüler Yapı: Nexora Math, modüler bir yapıya sahiptir. Her özellik, bağımsız bir modül olarak geliştirildi. Bu sayede yeni özellikler eklemek veya mevcut özellikleri güncellemek kolaylaştı."
            },
            {
              "type": "normal",
              "content": "API Tabanlı Mimari: Backend ve frontend arasındaki iletişim, RESTful API'ler üzerinden gerçekleşir. Bu sayede gelecekte web versiyonu veya başka platformlar için de aynı backend kullanılabilir."
            },
            {
              "type": "normal",
              "content": "Veritabanı Versiyonlama: Alembic migration sistemi sayesinde veritabanı değişikliklerini güvenli bir şekilde yönetebiliyoruz. Bu, proje geliştikçe şemayı güncellememizi ve geri alma işlemlerini kolaylaştırıyor."
            },
            
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Bu Proje Geliştirilirken Neler Düşünüldü?",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1.8rem',
          marginTop: '1.2rem',
          color: '#455a64',
        }
      },
      // List
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Kullanıcı Deneyimi Önceliği: Her teknik karar, kullanıcı deneyimini iyileştirmek için alındı. Örneğin, bot'un gerçekçi davranışları, kullanıcıların problem çözme becerilerini daha iyi geliştirmesini sağlar. Seviye kilitleme mekanizması, kullanıcıları daha fazla pratik yapmaya teşvik eder."
            },
            {
              "type": "normal",
              "content": "Zihinsel Gelişim Psikolojisi: Oyun mekanikleri, zihinsel gelişim ve problem çözme psikolojisi prensiplerine dayanır. Seviye bazlı ilerleme, anında geri bildirim, başarı hissi... Tüm bunlar, kullanıcıların problem çözme becerilerini geliştirmek için tasarlandı."
            },
            {
              "type": "normal",
              "content": "Teknik Mükemmellik: Kod kalitesi, performans ve güvenlik her zaman ön plandaydı. Katmanlı mimari, test yazımı ve hata yönetimi, projenin teknik mükemmelliğini sağlar."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      // Title
      {
        state: "Title",
        content: {
          "normal": "Nexora Math'in Vizyonu",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Gelecekte Eklenebilecek Özellikler",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1.8rem',
          marginTop: '1.2rem',
          color: '#455a64',
        }
      },
      // List
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Turnuva Sistemi: Kullanıcıların birbirleriyle yarışabileceği turnuvalar, sosyal bir boyut ekleyecek. Bu, öğrenme sürecini daha da eğlenceli hale getirecek."
            },
            {
              "type": "normal",
              "content": "Mağaza Sistemi: Oyun içi para birimi (elmas) ile ipuçları ve özel özellikler satın alma imkanı, oyun içi ekonomiyi güçlendirecek."
            },
            {
              "type": "normal",
              "content": "İlerleme Analitiği: Detaylı kullanıcı performans raporları, kullanıcıların kendilerini geliştirmelerine yardımcı olacak. Hangi konularda güçlü, hangi konularda zayıf olduklarını görebilecekler."
            },
            {
              "type": "normal",
              "content": "Sosyal Özellikler: Arkadaş ekleme, skor paylaşma gibi özellikler, topluluk oluşturulmasını sağlayacak. Öğrenme, sosyal bir deneyim haline gelecek."
            },
            {
              "type": "normal",
              "content": "Daha Fazla Oyun Modu: Hız modu, zaman yarışması gibi yeni modlar, çeşitliliği artıracak ve farklı öğrenme stillerine hitap edecek."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },

    ],
    image: nexoraMathImage,
    description: "İslam şeriati konularında kullanıcılara yardımcı olmak için geliştirilmiş modern bir mobil uygulama. Kullanıcılar İslami hukuk konularında sorular sorabilir ve detaylı cevaplar alabilirler.",
    technologies: ["FastAPI", "LangChain", "Flutter", "MySQL"],
    link: "#",
    github: "#",
    fullDescription: "THE IMAM, İslami hukuk ve şeriat konularında kullanıcılara yardımcı olmak için geliştirilmiş kapsamlı bir mobil uygulamadır. Modern yapay zeka teknolojileri kullanılarak geliştirilmiş bu uygulama, kullanıcıların İslami konularda sorularını yanıtlayabilir ve detaylı bilgi sağlayabilir. FastAPI ile güçlü bir backend altyapısı, LangChain ile gelişmiş dil modeli entegrasyonu ve Flutter ile platformlar arası uyumlu bir kullanıcı arayüzü sunmaktadır."
  },
  3: {
    id: 1,
    title: "Vorteza ERP: Modern, Akıllı ve Entegre Web Tabanlı İşletme Yönetim Sistemi",
    subtitle: "Software and Artificial Intelligence",
    image: vortezImage,
    buttons: [ "Language", "Download", "Share", "Ask Question", "GitHub", "Demo"],
    blocks: [
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "“Yazılım Mühendisliği” dersi kapsamında geliştirdiğimiz Vorteza ERP, bir ders projesinden çok daha fazlası oldu. Modern yazılım mimarileriyle geliştirilen bu web tabanlı ERP sistemi, gerçek dünyadaki kurumsal ihtiyaçlara çözüm sunmayı hedefledi. Bu yazıda, Vorteza ERP’nin her bir modülünü, kullanılan teknolojileri ve geliştirme süreçlerimizi detaylarıyla paylaşıyorum. Press enter or click to view image in full size"
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "image",
        content: [
          vorteza1,
          vorteza5,
          vorteza2,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '250px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },
      {
        state: "Title",
        content: {
          "normal": "Neden Vorteza ERP?",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: {
          "normal": "Günümüzde küçük, orta ve büyük ölçekli işletmelerin büyüyen ihtiyaçlarını karşılayacak esnek, güvenli ve modüler ERP çözümlerine olan ihtiyaç her geçen gün artmakta. Biz de bu ihtiyaçtan ilham alarak, işletmelerin iş süreçlerini kolaylaştıracak, kullanıcı dostu, entegre bir sistem geliştirmeyi hedefledik. Bu sistemde sadece teorik bilgi değil, pratikte kullanılabilecek özellikler barındıran gerçek bir ürün ortaya koyduk."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Sistem Mimarisi ve Genel Özellikler",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Vorteza ERP, modüler bir yapıyla geliştirildi. Bu sayede her bir modül, bağımsız çalışabilirken aynı zamanda sistemle entegre bir şekilde sorunsuz işleyebiliyor. Sistemin ana sayfası, blog, yardım, fiyatlandırma ve iletişim gibi halka açık erişilebilen bölümler içeriyor."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },  
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Kullanıcı dostu arayüzümüzü modern bir UI/UX anlayışıyla geliştirdik. Özellikle React.js ve Bootstrap birleşimi, sade ama işlevsel bir görünüm sundu. Güvenlik tarafında ise kullanıcı girişlerinde JWT (JSON Web Token) teknolojisini kullandık. Şifreler şifrelenerek saklandı ve kullanıcıya özel token’larla sistem güvenliği sağlandı."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "İletişim ve Chatbot Entegrasyonu",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "ERP sistemimizin iletişim kısmı çift yönlü bir sistem olarak geliştirildi. Bir yandan kullanıcılar bizimle doğrudan iletişime geçebiliyor, diğer yandan chatbot üzerinden anlık destek alabiliyorlar."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "“Bir insana sor” özelliği ile gönderilen mesajlar, PHP Mailer aracılığıyla e-posta adresimize düşüyor."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Chatbot tarafında ise, LangChain ve OpenAI API’si ile entegre edilen yapay zekâ destekli, RAG (Retrieval-Augmented Generation) mimarisine sahip akıllı bir destek sistemi sunuyoruz. Bu bot, personelin sıkça sorduğu sorulara otomatik yanıtlar veriyor ve dokümantasyon desteği sağlıyor."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      
      // Line
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      // Title
      {
        state: "Title",
        content: {
          "normal": "Dashboard ve İstatistikler Modülü",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Giriş yapan kullanıcıları karşılayan ilk sayfa, dashboard paneli oluyor. Bu panelde, işletmeye özel:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Günlük / Aylık satışlar"
            },
            {
              "type": "normal",
              "content": "Aktif müşteri sayısı"
            },
            {
              "type": "normal",
              "content": "Görev durumu ve personel performansı"
            },
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "gibi veriler, ECharts.js ve Chart.js kullanılarak dinamik grafikler ile sunulmakta. Bu sayede kullanıcılar, verilerine görsel olarak hızlı ve anlamlı bir şekilde ulaşabiliyor."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "image",
        content: [
          vorteza4,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '250px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "CRM Modülü",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Her işletme, müşterileriyle olan etkileşimlerini düzenli bir yapıya oturtmak ister. CRM modülümüz bu ihtiyaca cevap veriyor:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Müşteriler, aşama aşama (potansiyel, teklif, anlaşma, satış sonrası vb.) takip edilebiliyor."
            },
            {
              "type": "normal",
              "content": "Dinamik filtreleme ve özel görünüm seçenekleri ile veri takibi oldukça kolaylaştırıldı."
            },
            {
              "type": "normal",
              "content": "Modern arayüzü ve sektörel uyumu sayesinde gerçek dünyadaki CRM sistemlerine benzer bir deneyim sunuyoruz."
            },
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },

      {
        state: "image",
        content: [
          vorteza6,
          vorteza7,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '400px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Görev Yönetimi (Yapılacaklar) Modülü",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Bir işletme içerisindeki personellerin görev dağılımı ve takibi oldukça önemli. Bu amaçla geliştirdiğimiz Görev Yönetimi modülünde:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Her görev bir son teslim tarihi ve sorumlu personel ile tanımlanabiliyor."
            },
            {
              "type": "normal",
              "content": "Görevler “topluluklar” halinde gruplandırılabiliyor."
            },
            {
              "type": "normal",
              "content": "Her görev topluluğuna özel bir yorum bölümü ile tartışmalar yapılabiliyor."
            },
            {
              "type": "normal",
              "content": "Bu yapı sayesinde ekip içi etkileşim ve sorumluluk paylaşımı net bir şekilde organize edilebiliyor."
            },
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      {
        state: "image",
        content: [
          vorteza8,
          vorteza9,
          vorteza10,
          vorteza11,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '400px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Pazarlama (Marketing) Modülü",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "İşletmelerin kampanya başlatması ve hedef kitlesine ulaşması için bir pazarlama modülü geliştirdik. Burada işletme sahibi:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Kampanya başlığı, açıklaması ve hedef şartları belirleyebiliyor."
            },
            {
              "type": "normal",
              "content": "Bu kampanya, otomatik olarak Mail yoluyla müşterilere gönderiliyor."
            },
            {
              "type": "normal",
              "content": "Bu modül ile birlikte ERP sistemi, sadece bir iç yönetim aracı değil, dışa dönük bir pazarlama desteği de sunar hale geldi."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      {
        state: "image",
        content: [
          vorteza12,
          vorteza13,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '400px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Chatbot Modülü (AI)",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Bu modül, sistemin en yenilikçi parçalarından biri olarak geliştirildi. İki bölümden oluşuyor:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: [
          {
            "type": "bold",
            "content": "Yardım Sayfasındaki Kullanıcı Chatbot’u:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Basit kullanıcı sorularını hızlıca cevaplayan, yardım ve yönlendirme sağlayan bir sistem."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      }, 
      {
        state: "Text",
        content: [
          {
            "type": "bold",
            "content": "AI Chatbot (RAG Mimarisi ile):"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Bu modül özel olarak geliştirildi ve sistem belgelerine dayalı olarak çalışan bir RAG (Retrieval-Augmented Generation) mimarisi kullandı."
            },
            {
              "type": "normal",
              "content": "Langchain ve OpenAI API entegrasyonu ile geliştirildi."
            },
            {
              "type": "normal",
              "content": "Şu anda sabit dökümantasyonlardan yanıt üretiyor, ancak ilerleyen zamanlarda doğrudan veri tabanı bağlantısıyla gerçek zamanlı içerik sunarak personellere büyük kolaylık sağlamayı hedefliyoruz. Press enter or click to view image in full size"
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      }, 

      {
        state: "image",
        content: [
          vorteza14,
          vorteza15,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '400px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Kargo (Shipping) Modülü",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Yeni kargo oluşturma"
            },
            {
              "type": "normal",
              "content": "Kargo güncelleme ve silme"
            },
            {
              "type": "normal",
              "content": "Kargo durum takibi ve işlem geçmişi"
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Kargo modülümüz sayesinde işletmeler, gönderim süreçlerini sistem üzerinden detaylı şekilde yönetebiliyor. Kargo oluşturma ekranında alıcı bilgileri, gönderim adresi ve kargo içeriği gibi alanlar yer alırken; her bir işlem ayrı ayrı kaydedilmekte ve loglanmaktadır. Bu da hem güvenliği hem de izlenebilirliği artırmaktadır."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "image",
        content: [
          vorteza16,
          vorteza17,
          vorteza18,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '400px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Personel ve Ayarlar Modülü",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "İşletme sahiplerinin yetkilendirme ve yönetim işlemlerini kolayca yapabilmesi için bir Ayarlar paneli geliştirdik. Bu panelden:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Personel ekleme, silme, güncelleme işlemleri yapılabiliyor."
            },
            {
              "type": "normal",
              "content": "Yetki düzeyleri ve roller belirlenebiliyor."
            },
            {
              "type": "normal",
              "content": "Sistem bu anlamda sadece kullanıcı yönetimi değil, aynı zamanda kurumsal rol bazlı kontrol mekanizması da sunuyor."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      {
        state: "image",
        content: [
          vorteza19,
          vorteza20,
          vorteza21,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '400px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },
      
      
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },
    ],
    english_blocks: [
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Vorteza ERP, which we developed as part of the \"Software Engineering\" course, became much more than a course project. This web-based ERP system, developed with modern software architectures, aimed to provide solutions to real-world corporate needs. In this article, I share in detail each module of Vorteza ERP, the technologies used, and our development processes. Press enter or click to view image in full size"
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "image",
        content: [
          vorteza1,
          vorteza5,
          vorteza2,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '250px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },
      {
        state: "Title",
        content: {
          "normal": "Why Vorteza ERP?",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: {
          "normal": "Today, the need for flexible, secure, and modular ERP solutions that meet the growing needs of small, medium, and large-scale businesses is increasing day by day. Inspired by this need, we aimed to develop a user-friendly, integrated system that would facilitate business processes. In this system, we have created a real product that contains not only theoretical knowledge but also features that can be used in practice."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "System Architecture and General Features",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Vorteza ERP was developed with a modular structure. This way, each module can work independently while also functioning seamlessly integrated with the system. The system includes publicly accessible sections such as the main page, blog, help, pricing, and contact."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },  
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "We developed our user-friendly interface with a modern UI/UX approach. Especially the combination of React.js and Bootstrap offered a simple but functional appearance. On the security side, we used JWT (JSON Web Token) technology for user logins. Passwords are stored encrypted and system security is provided with user-specific tokens."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Communication and Chatbot Integration",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "The communication part of our ERP system was developed as a bidirectional system. On one hand, users can contact us directly, and on the other hand, they can receive instant support through the chatbot."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Messages sent through the \"Ask a Human\" feature are received at our email address via PHP Mailer."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "On the chatbot side, we offer an AI-powered intelligent support system with RAG (Retrieval-Augmented Generation) architecture integrated with LangChain and OpenAI API. This bot automatically answers frequently asked questions by staff and provides documentation support."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      
      // Line
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      // Title
      {
        state: "Title",
        content: {
          "normal": "Dashboard and Statistics Module",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "The first page that welcomes logged-in users is the dashboard panel. This panel includes business-specific:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Daily / Monthly sales"
            },
            {
              "type": "normal",
              "content": "Active customer count"
            },
            {
              "type": "normal",
              "content": "Task status and staff performance"
            },
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "such data are presented with dynamic charts using ECharts.js and Chart.js. This way, users can quickly and meaningfully access their data visually."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "image",
        content: [
          vorteza4,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '250px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "CRM Module",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Every business wants to organize their interactions with customers into a regular structure. Our CRM module addresses this need:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Customers can be tracked stage by stage (potential, offer, agreement, post-sale, etc.)."
            },
            {
              "type": "normal",
              "content": "Data tracking has been greatly facilitated with dynamic filtering and custom view options."
            },
            {
              "type": "normal",
              "content": "Thanks to its modern interface and industry compatibility, we offer an experience similar to real-world CRM systems."
            },
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },

      {
        state: "image",
        content: [
          vorteza6,
          vorteza7,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '400px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Task Management (To-Do) Module",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Task distribution and tracking of personnel within a business is very important. In the Task Management module we developed for this purpose:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Each task can be defined with a deadline and responsible staff member."
            },
            {
              "type": "normal",
              "content": "Tasks can be grouped into \"communities\"."
            },
            {
              "type": "normal",
              "content": "Discussions can be held with a special comment section for each task community."
            },
            {
              "type": "normal",
              "content": "Thanks to this structure, team interaction and responsibility sharing can be clearly organized."
            },
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      {
        state: "image",
        content: [
          vorteza8,
          vorteza9,
          vorteza10,
          vorteza11,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '400px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Marketing Module",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "We developed a marketing module for businesses to launch campaigns and reach their target audience. Here, the business owner:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Can determine campaign title, description, and target conditions."
            },
            {
              "type": "normal",
              "content": "This campaign is automatically sent to customers via email."
            },
            {
              "type": "normal",
              "content": "With this module, the ERP system has become not only an internal management tool but also an outward-facing marketing support."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      {
        state: "image",
        content: [
          vorteza12,
          vorteza13,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '400px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Chatbot Module (AI)",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "This module was developed as one of the most innovative parts of the system. It consists of two parts:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: [
          {
            "type": "bold",
            "content": "User Chatbot on Help Page:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "A system that quickly answers simple user questions and provides help and guidance."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      }, 
      {
        state: "Text",
        content: [
          {
            "type": "bold",
            "content": "AI Chatbot (with RAG Architecture):"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "This module was specially developed and uses a RAG (Retrieval-Augmented Generation) architecture that works based on system documentation."
            },
            {
              "type": "normal",
              "content": "It was developed with LangChain and OpenAI API integration."
            },
            {
              "type": "normal",
              "content": "Currently, it generates responses from fixed documentation, but in the future, we aim to provide great convenience to staff by offering real-time content through direct database connection. Press enter or click to view image in full size"
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      }, 

      {
        state: "image",
        content: [
          vorteza14,
          vorteza15,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '400px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Shipping Module",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Creating new shipment"
            },
            {
              "type": "normal",
              "content": "Updating and deleting shipments"
            },
            {
              "type": "normal",
              "content": "Shipment status tracking and transaction history"
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Thanks to our shipping module, businesses can manage shipping processes in detail through the system. While the shipment creation screen includes fields such as recipient information, shipping address, and shipment content, each transaction is recorded and logged separately. This increases both security and traceability."
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "image",
        content: [
          vorteza16,
          vorteza17,
          vorteza18,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '400px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Staff and Settings Module",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          color: 'var(--text-color)',
          marginTop: "1.4rem"
        }
      },

      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "We developed a Settings panel so that business owners can easily perform authorization and management operations. From this panel:"
          }
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Staff addition, deletion, and update operations can be performed."
            },
            {
              "type": "normal",
              "content": "Authority levels and roles can be determined."
            },
            {
              "type": "normal",
              "content": "In this sense, the system offers not only user management but also an enterprise role-based control mechanism."
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      {
        state: "image",
        content: [
          vorteza19,
          vorteza20,
          vorteza21,
        ],
        style: {
          display: 'flex',
          justifyContent: 'center',
          margin: '1.4rem 0',
          gap: '3rem',
        },
        image_style: {
          width: '400px',
          objectFit: 'cover',
          borderRadius: '10px',
        },
      },
      
      
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },
    ],

    description: "İslam şeriati konularında kullanıcılara yardımcı olmak için geliştirilmiş modern bir mobil uygulama. Kullanıcılar İslami hukuk konularında sorular sorabilir ve detaylı cevaplar alabilirler.",
    technologies: ["FastAPI", "LangChain", "Flutter", "MySQL"],
    link: "#",
    github: "#",
    fullDescription: "THE IMAM, İslami hukuk ve şeriat konularında kullanıcılara yardımcı olmak için geliştirilmiş kapsamlı bir mobil uygulamadır. Modern yapay zeka teknolojileri kullanılarak geliştirilmiş bu uygulama, kullanıcıların İslami konularda sorularını yanıtlayabilir ve detaylı bilgi sağlayabilir. FastAPI ile güçlü bir backend altyapısı, LangChain ile gelişmiş dil modeli entegrasyonu ve Flutter ile platformlar arası uyumlu bir kullanıcı arayüzü sunmaktadır."
  },
  4: {
    id: 1,
    title: "Aiksir Chat — Kendi Özelleştirilebilir Chatbotunuzu Oluşturun!",
    subtitle: "Software and Artificial Intelligence",
    image: chatbotsImage,
    buttons: [ "Language", "Download", "Share", "Ask Question", "GitHub", "Demo"],
    blocks: [
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Günümüzde yapay zeka tabanlı chatbotlar, müşteri hizmetlerinden bilgi yönetimine kadar pek çok alanda aktif olarak kullanılıyor. Bu artan talep ve potansiyel kullanım alanlarını göz önünde bulundurarak, ben de kendi chatbot projemi geliştirmeye karar verdim. Ancak amacım, yalnızca basit bir sohbet botu oluşturmak değildi. Her kullanıcının ihtiyaçlarına göre özelleştirebileceği, yönetebileceği ve farklı senaryolara uyarlayabileceği esnek bir sistem geliştirmeyi hedefledim."
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },  
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Bu süreçte, açık kaynaklı bir proje olan Anything LLM Embed’i temel alarak, projeyi nasıl daha güçlü ve fonksiyonel bir chatbot sistemine dönüştürdüğümü adım adım anlatacağım. Özelleştirilebilir özellikler, sohbet kayıt sistemleri ve akıllı asistan entegrasyonlarıyla zenginleştirdiğim bu projede yaşadığım teknik detayları, karşılaştığım zorlukları ve geliştirdiğim çözümleri bu yazıda paylaşacağım."
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Projeye Başlangıç",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: {
          "normal": "Chatbot sistemini geliştirirken, öncelikle sağlam ve esnek bir temel oluşturacak bir yapı arayışına girdim. Araştırmalarım sonucunda Anything LLM Embed adlı açık kaynaklı bir projeyle karşılaştım. Bu proje, yalnızca frontend tarafında çalışan ve tek bir göreve odaklanan basit bir yapı sunuyordu. Ancak benim hedefim, bu projeyi çok daha fonksiyonel, kullanıcı dostu ve ölçeklenebilir bir sisteme dönüştürmekti."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },  
      {
        state: "Text",
        content: {
          "normal": "Bu doğrultuda attığım ilk adım, sisteme bir veritabanı eklemek oldu. MySQL kullanarak gerçekleştirdiğim bu entegrasyon sayesinde, kullanıcıların kendi chatbotlarını oluşturabilmeleri ve bu botlara özel verileri güvenli bir şekilde saklayabilmeleri mümkün hale geldi. Veritabanı sayesinde her kullanıcıya özel sohbet geçmişi, bot ayarları ve diğer kişiselleştirilmiş veriler güvenle tutulabiliyordu."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      }, 
      {
        state: "Text",
        content: [
          {
            "type": "normal",
            "content": "Bir sonraki aşamada ise, projeye bir backend ekleyerek veri yönetimini daha kontrollü hale getirdim ve kullanıcı kimlik doğrulama süreçlerini yapılandırdım. "
          },
          {
            "type": "bold",
            "content": "Backend tarafında, veritabanı ile iletişimi PHP kullanarak sağladım; gelen mesajları alıp cevap verme işlemlerini ise FastAPI ile yönettim."
          },
          {
            "type": "normal",
            "content": "Bu sayede, bir site sahibi veya kullanıcı chatbot hizmetinden faydalanmak istediğinde sisteme kolayca kayıt olup kendi ihtiyaçlarına özel bir bot oluşturabiliyordu. Bu yapı, yalnızca bireysel kullanıcılar için değil, aynı zamanda çoklu müşterilere hizmet verecek daha geniş kapsamlı bir sistem için de sağlam bir temel sundu."
          },
        ],
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "line",
        style: {
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--text-color)',
          marginTop: '1.4rem',
          marginBottom: '1.4rem',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Kullanıcı Kayıt Sistemi ve Benzersiz Kimlik Tanımlaması",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: {
          "normal": "Bir kullanıcının sisteme kayıt olmasıyla birlikte, benzersiz bir müşteri ID’si (embed ID) oluşturulmasını sağladım. Bu ID, kullanıcının chatbot hizmetini yönetmesini ve kendi sitesinde chatbotu çalıştırmasını sağlayan temel bileşendi. Kullanıcının bu embed ID ile sisteme bağlanmasını sağlamak için aşağıdaki formatta bir JavaScript kodu oluşturdum:"
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      }, 
      {
        state: "Text",
        content: {
          "normal": "Bu script sayesinde kullanıcı, kendi web sitesine chatbotu kolayca entegre edebiliyor ve API aracılığıyla chatbot hizmetinden yararlanabiliyor. Kullanıcı istediği zaman bu kodu değiştirebilir ve chatbotunun görünümünü, davranışını veya özelliklerini güncelleyebilir."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Chatbot Özelleştirme Seçenekleri",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: {
          "normal": "Sistemin en önemli özelliklerinden biri, kullanıcının chatbotunu tamamen özelleştirebilmesi oldu. Kullanıcılar, kendi sitelerinin tasarımına uygun şekilde chatbotlarını özelleştirebilirler. Aşağıda chatbotun özelleştirilebileceği bazı parametreleri sıraladım:"
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Chatbotun ana rengi"
            },
            {
              "type": "normal",
              "content": "Chatbotun adı ve logosu"
            },
            {
              "type": "normal",
              "content": "Chatbotun davranış biçimi ve yanıt verme sınırları"
            },
            {
              "type": "normal",
              "content": "Chatbotun yüksekliği ve genişliği"
            },
            {
              "type": "normal",
              "content": "Sayfada hangi konumda yer alacağı (sağ, sol, üst, alt)"
            },
            {
              "type": "normal",
              "content": "Yazı tipi ve büyüklüğü"
            },
            {
              "type": "normal",
              "content": "Açma kapama butonunun tasarımı"
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
        }
      },
      {
        state: "Text",
        content: {
          "normal": "Kullanıcılar, bu özellikleri yönetim panelinden kolayca değiştirebilir ve herhangi bir değişiklik anında chatbotlarına yansır. Böylece, her müşteri kendi sitesine uygun, benzersiz bir chatbot oluşturma imkanına sahip olur."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Title",
        content: {
          "normal": "Kullanıcı Konuşmalarının Takibi ve Yönetimi",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: {
          "normal": "Chatbotun bir diğer önemli özelliği, kullanıcı sohbetlerinin kayıt altına alınması oldu. Bir müşteri sitesine chatbot eklediğinde, siteyi ziyaret eden her kullanıcıya benzersiz bir session ID atandı. Bu session ID sayesinde, kullanıcının sohbet geçmişi kaydedildi ve gerektiğinde tekrar erişilebilecek şekilde saklandı."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      }, 

      {
        state: "Text",
        content: {
          "normal": "Bunun büyük avantajları oldu. Eğer bir kullanıcı chatbotla yaptığı konuşmayı kaybetmek istemiyorsa, bu sohbet veri tabanında saklanarak kalıcı hale geliyordu. Ancak kullanıcı, istediği zaman “Reset Chat” butonuna basarak sohbeti sıfırlayabiliyordu. Sohbet sıfırlandığında, sistem yeni bir boş satır ekleyerek en son oluşturulan kaydı boş olarak gösteriyordu. Bu sayede, kullanıcıya sohbet geçmişinin tamamen silindiği hissi veriliyordu."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      }, 

      {
        state: "Text",
        content: {
          "normal": "Bu özellik, hem kullanıcıların deneyimini geliştirdi hem de site sahiplerine müşteri etkileşimlerini daha iyi analiz etme imkanı sundu. Site sahibi, herhangi bir hata veya yanlış anlaşılma durumunda belirli bir session ID ile sohbet geçmişini inceleyebilir ve müşteri deneyimini iyileştirebilirdi."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "Title",
        content: {
          "normal": "Yapay Zeka Entegrasyonu",
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '2rem',
          marginTop: '1.4rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: {
          "normal": "Chatbotu daha akıllı hale getirmek için yapay zeka entegrasyonu gerçekleştirdim. CrewAI kullanarak OpenAI API’si ile bir Agent oluşturdum. Bu agent, kullanıcıların chatbot ile daha akıcı ve doğal bir şekilde etkileşim kurmasını sağladı."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },
      {
        state: "Text",
        content: {
          "normal": "Geliştirdiğim sistemde chatbot, kullanıcıya önceden belirlenmiş kurallar çerçevesinde yanıt veriyordu. Kullanıcıya en iyi yanıtı sunmak için aşağıdaki kurallar belirlendi:"
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

      {
        state: "list",
        content: {
          "items": [
            {
              "type": "normal",
              "content": "Kullanıcının isteğini tam olarak anlayarak en uygun yanıtı sunmak"
            },
            {
              "type": "normal",
              "content": "Kullanıcının daha önce yaptığı konuşmaları analiz ederek bağlamı korumak"
            },
            {
              "type": "normal",
              "content": "Sadece doğruluğundan emin olduğu bilgileri sunmak"
            },
            {
              "type": "normal",
              "content": "Kullanıcının deneyimini iyileştirmek için net ve anlaşılır yanıtlar vermek"
            },
            {
              "type": "normal",
              "content": "Gereksiz ve yanıltıcı bilgilerden kaçınmak"
            }
          ]
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
          marginLeft: '40px',
          listStyle: 'decimal',
        }
      },
      {
        state: "bosluk",
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },  
      {
        state: "Text",
        content: {
          "normal": "Bunun yanında, her chatbot belirli bir marka veya web sitesine hizmet ettiği için, chatbotun verdiği yanıtları o sitenin içeriğiyle sınırlandırdım. Yani, bir chatbot “X şirketinin müşteri hizmetleri” olarak çalışıyorsa, yalnızca X şirketiyle ilgili sorulara yanıt veriyor ve kullanıcıyı yanlış yönlendirmiyordu."
        },
        style: {
          fontFamily: 'Noto Sans,sans-serif',
          fontSize: '1rem',
          color: 'var(--text-color)',
        }
      },

    ],

    description: "İslam şeriati konularında kullanıcılara yardımcı olmak için geliştirilmiş modern bir mobil uygulama. Kullanıcılar İslami hukuk konularında sorular sorabilir ve detaylı cevaplar alabilirler.",
    technologies: ["FastAPI", "LangChain", "Flutter", "MySQL"],
    link: "#",
    github: "#",
    fullDescription: "THE IMAM, İslami hukuk ve şeriat konularında kullanıcılara yardımcı olmak için geliştirilmiş kapsamlı bir mobil uygulamadır. Modern yapay zeka teknolojileri kullanılarak geliştirilmiş bu uygulama, kullanıcıların İslami konularda sorularını yanıtlayabilir ve detaylı bilgi sağlayabilir. FastAPI ile güçlü bir backend altyapısı, LangChain ile gelişmiş dil modeli entegrasyonu ve Flutter ile platformlar arası uyumlu bir kullanıcı arayüzü sunmaktadır."
  },
  5: {
    id: 5,
    title: "Geen",
    description: "Gerçek zamanlı hava durumu uygulaması. Kullanıcı dostu arayüz ve detaylı hava durumu bilgileri sunan modern bir mobil uygulama.",
    image: hidrojenImage,
    technologies: ["React Native", "API", "TypeScript"],
    link: "#",
    github: "#",
    fullDescription: "Gerçek zamanlı hava durumu bilgileri sunan modern bir mobil uygulamadır. React Native ile iOS ve Android platformlarında çalışan cross-platform uygulama, hava durumu API'leri ile entegre edilmiş ve TypeScript ile tip güvenliği sağlanmıştır. Kullanıcılar mevcut konumlarına göre hava durumunu görebilir, farklı şehirler için arama yapabilir ve detaylı hava durumu bilgilerini görüntüleyebilirler."
  }
}