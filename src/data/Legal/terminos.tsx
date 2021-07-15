import React from "react";
import { textProps } from "./textDataType";
import styles from "../../components/Legal/elements/Text/style.module.scss";

export const terminosText: Array<textProps> = [
  {
    title: "",
    message: (
      <p>
        El portal www.thcsas.com.co (en adelante el “Portal”) es de propiedad de
        THE HUNTER´S COMPANY SAS, en adelante THC. El acceso, participación y
        uso del Portal es gratuito y está regido por los términos y condiciones
        que se incluyen a continuación, los cuales se entienden conocidos y
        aceptados por los Usuarios del Portal en adelante (el “Usuario”).
      </p>
    ),
  },
  {
    title: "Aceptación de los términos de uso",
    message: (
      <p>
        El solo acceso al Portal implica la aceptación total e integral del
        Usuario a los Términos de Uso y sus actualizaciones y las demás
        condiciones y reglamentos que defina THC para su utilización. THC se
        reserva sin limitación y en cualquier caso, el derecho de actualizar y
        modificar en cualquier momento y de cualquier forma, de manera
        unilateral y sin previo aviso, los Términos de Uso y los contenidos del
        Portal. Dado el carácter vinculante de los Términos de Uso es
        responsabilidad única del Usuario revisar de vez en cuando los Términos
        de Uso vigentes en cada momento.
      </p>
    ),
  },
  {
    title: "Condiciones de Uso",
    message: (
      <>
        <p>
          Salvo que expresamente se diga lo contrario, el acceso a la
          información del Portal es gratuito y libre. Sin perjuicio de lo
          anterior THC en ningún caso garantiza el acceso permanente e
          ininterrumpido al mismo, o que este acceso se realice libre de errores
          o de virus u otros agentes nocivos y ajenos a THC.
        </p>
        <p>
          Cuando el usuario acceda al sitio, será responsabilidad de este, tomar
          las medidas pertinentes para evitar y/o corregir los efectos
          indeseados de dichos agentes. El Usuario se compromete a utilizar el
          contenido de este Portal única y exclusivamente para actividades
          lícitas y a utilizar la información puesta a su disposición a través
          del mismo con sujeción a los Términos de Uso.
        </p>
        <p>
          La información contenida en el Portal en ningún caso podrá ser
          utilizada con fines o propósitos comerciales. La utilización del
          Portal por parte del Usuario implica la prohibición para transmitir,
          publicar o comunicar cualquier tipo de información ilegal o prohibida
          en los términos definidos para el efecto en la legislación colombiana.
          Igualmente el Usuario se obliga a no insertar o transferir al Portal
          materiales obscenos, engañosos, inexactos, difamatorios o que vulneren
          los derechos de propiedad intelectual de THC o que puedan afectar
          negativamente datos, software o el funcionamiento de cualquier equipo
          informático.
        </p>
        <p>
          El Usuario que ingresa al Portal lo hace bajo su propia
          responsabilidad razón por la cual THC no se hace responsable por
          posibles daños ocasionados al Usuario o a terceros por el acceso o por
          la utilización de este, por la pérdida de información o por la
          imposibilidad de usarlo o la información contenida en él,
          circunstancias que en todos los casos se considerarán como fuerza
          mayor o caso fortuito.
        </p>
        <p>
          El Portal incluirá, a discreción de THC, sitios vinculados, los cuales
          se proporcionan simplemente a título informativo, como un servicio a
          los Usuarios, la inclusión de estos sitios vinculados en el Portal no
          implica aprobación, recomendación o vinculación de THC con cualquiera
          de estos sitios ni ninguna asociación con sus operadores. En este
          sentido THC bajo ningún evento será responsable de la información y
          contenidos de los sitios vinculados, ni de su accesibilidad o
          permanente o discontinua disponibilidad.
        </p>
        <p>
          El Usuario se obliga a no abusar, amenazar o intimidar a otros
          Usuarios del Portal ya sea a través del chat o cualquier otro espacio
          de participación. Su participación será bajo su exclusiva
          responsabilidad e implica la aceptación y conocimiento por parte del
          Usuario de respetar los Términos y Condiciones del Portal, de tal
          manera que se entiende que exime y mantendrá indemne a THC de
          cualquier responsabilidad que se derive de su incumplimiento.
        </p>
      </>
    ),
  },
  {
    title: "Naturaleza de la información",
    message: (
      <ul className={styles["_list-style-letter"]}>
        <li>
          La información presentada es de carácter ilustrativo y no constituye
          ni podrá ser entendida como una cotización u oferta de servicios. Las
          condiciones y características de financiamiento serán potestad
          exclusiva de las entidades financieras según el cumplimiento de
          requisitos por parte del Cliente y estarán sujetas a modificaciones
          según las políticas de cada entidad financiera.
        </li>
        <li>
          La información suministrada en nuestra página web, está sujeta a las
          condiciones y políticas de cada entidad financiera, las cuales pueden
          variar según la vigencia de las mencionadas condiciones y políticas al
          momento del desembolso.
        </li>
        <li>
          La aprobación o la negación de la financiación, es potestad de las
          entidades financieras.
        </li>
        <li>
          La tasa de interés y los plazos para los períodos de financiación
          indicadas dentro de la calculadora de crédito son referentes
          ilustrativos basados en los datos de referencias. Por lo anterior los
          resultados aquí señalados no necesariamente garantizan las tasas y
          plazos finales fijados por las entidades financieras en dicho momento
          para los Clientes.
        </li>
      </ul>
    ),
  },
  {
    title: "Propiedad del contenido del portal",
    message: (
      <p>
        Este Portal de Internet y su contenido son de propiedad de THC. Está
        prohibida su reproducción total o parcial, su traducción, inclusión,
        transmisión, almacenamiento o acceso a través de medios analógicos,
        digitales o de cualquier otro sistema o tecnología creada o por crearse,
        sin autorización previa y escrita de THC.
      </p>
    ),
  },
  {
    title: "Propiedad intelectual",
    message: (
      <p>
        THC es la titular de los derechos de autor y propiedad intelectual sobre
        los signos distintivos en general, marcas comerciales, de servicio y en
        general todo lo que aparece en la pantalla, así como sobre la
        información y el material contenidos en el Portal salvo indicación en
        contrario. En desarrollo de lo anterior, el Usuario se obliga a no
        distribuir, vender o comercializar, y en general a no disponer por
        cualquier medio de la información contenida en el Portal, total o
        parcialmente, so pena de incurrir en las responsabilidades por violación
        de los derechos de autor, conforme a las normas vigentes salvo que
        exista autorización previa y escrita de THC. El Usuario podrá hacer
        copia de su contenido, exclusivamente para usos no comerciales siempre y
        cuando se mantengan intactos todos los avisos de derechos de autor y se
        cite la fuente. En ningún caso debe entenderse que la aceptación de los
        Términos de Uso de este documento concede una autorización de uso o
        licencia sobre los contenidos del Portal o de sus vínculos.
      </p>
    ),
  },
  {
    title: "Privacidad",
    message: (
      <>
        <p>
          Es interés de THC la protección de la privacidad de la información
          personal del Usuario obtenida a través del Portal, comprometiéndose a
          adoptar una política de confidencialidad de la información que recibe
          del Usuario.
        </p>
        <p>
          Se entiende por información personal aquella suministrada por el
          Usuario para el registro, la cual incluye datos tales como: nombre,
          identificación, edad, género, dirección, correo electrónico y
          teléfono.
        </p>
        <p>
          El Usuario reconoce que el ingreso de información personal, lo realiza
          de manera voluntaria y teniendo en cuenta las características del
          Portal y las facultades de uso por parte de THC, y en el entendido que
          tal información hará parte de un archivo y/o base de datos que
          contenderá su perfil, la cual podrá ser usado por THC en los términos
          aquí establecidos. Quien se registra en la página de THC acepta que
          sus datos se incorporen en las bases de datos de THC, las de sus
          filiales o subsidiarias.
        </p>
        <p>
          El Usuario acepta y conoce el hipotético riesgo que implica
          suministrar su información a través de Internet, por cuanto la
          transmisión no es absolutamente segura y THC no puede garantizar dicho
          extremo.
        </p>
        <p>
          THC no se responsabiliza por cualquier consecuencia derivada del
          ingreso indebido de terceros a la base de datos y/o por alguna falla
          técnica en el funcionamiento y/ o conservación de datos en el sistema
          en cualquiera de los capítulos del Portal.
        </p>
        <p>
          THC no garantiza que terceros no autorizados puedan tener conocimiento
          de la clase, condiciones, características y circunstancias del uso que
          los Usuarios hacen del Portal. Limitación de responsabilidad.
        </p>
      </>
    ),
  },
  {
    title: "Limitación de responsabilidad",
    message: (
      <>
        <p>
          Cualquier daño, pérdida o perjuicio que llegare a sufrir el Usuario o
          terceros derivado del acceso a la información contenida en el Portal
          como consecuencia de la interpretación o mal uso de la información o
          en general por ejecutar cualquier tipo de operación a través del
          Portal, es asumido por el Usuario y por lo tanto declara indemne y
          libre de toda responsabilidad a THC. Igualmente, el Usuario releva de
          cualquier responsabilidad a THC por los daños que llegare a sufrir el
          hardware y el software, o cualquier aparato electrónico a través del
          cual se logre el acceso al Portal. En ningún caso THC será responsable
          por daños, incluyendo pero sin limitarse a los directos, indirectos,
          especiales, o accidentales, ni por las pérdidas de información o
          gastos que pudiesen surgir por la conexión al Portal , por el uso que
          se haga de la misma, por la imposibilidad de hacer uso de la
          información del Portal o en general por cualquier falla en la
          ejecución, error, omisión, interrupción, defecto, demora en la
          transmisión o en la conexión, o por la existencia de un virus en la
          computadora o por fallas del sistema o en la línea, o por su
          suspensión o terminación.
        </p>
      </>
    ),
  },
  {
    title: "Notificaciones",
    message: (
      <p>
        Todas las notificaciones, requerimientos, peticiones y otras
        comunicaciones que requieran efectuar los Usuarios en relación con los
        Términos de Uso de este Portal, deberán realizarse por escrito y ser
        remitidas por correo certificado a la siguiente dirección: Carrera
        14#96-15 piso 1. Bogotá DC (Colombia).
      </p>
    ),
  },
  {
    title: "Legislación aplicable y jurisdicción competente",
    message: (
      <p>
        Las políticas y condiciones de acceso y uso aquí establecidas y los
        conflictos que puedan surgir respecto de su interpretación, uso, alcance
        y terminación se rigen por la ley colombiana y se someten a los jueces y
        tribunales colombianos.
      </p>
    ),
  },
];
